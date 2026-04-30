import { NextResponse } from "next/server";

const tasks = [
  { name: "Design", description: "Create wireframes for dashboard", projectName: "Project X" },
  { name: "Planning", description: "Define project roadmap", projectName: "Project Y" },
  { name: "Development", description: "Build authentication module", projectName: "Project Z" },
  { name: "Review", description: "Evaluate pull requests", projectName: "Project α" },
  { name: "Testing", description: "Perform integration testing", projectName: "Project β" },
];

const getRandom = <T>(arr: T[]) =>
  arr[Math.floor(Math.random() * arr.length)];

const getRandomTasks = (weekIndex: number) => {
  const count = Math.floor(Math.random() * 3) + 1; // 1–4 tasks

  return Array.from({ length: count }, (_, taskIndex: number) => {
    const task = getRandom(tasks);
    return {
      id: Number(weekIndex * 10) + taskIndex,
      name: task.name,   
      description: task.description,
      projectName: task.projectName,
      hoursLogged: Math.floor(Math.random() * 10),
    };
  });
};

// --- Mock Data (with timestamps) ---
export const mockTimesheets = Array.from({ length: 50 }, (_, i) => {
  const id = i + 1;

  const statuses = ["completed", "incomplete", "missing"];
  const status = statuses[i % statuses.length];

  const baseDate = new Date(2024, 0, 1);

  const startDate = new Date(baseDate);
  startDate.setDate(baseDate.getDate() + i * 7);

  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 4);

  const format = (d: Date) =>
    `${d.getDate()} ${d.toLocaleString("default", { month: "long" })}`;

  return {
    id,
    status,
    startTimestamp: startDate.getTime(),
    endTimestamp: endDate.getTime(),
    date: `${format(startDate)} - ${format(endDate)}, 2024`,
    tasks: getRandomTasks(i),
  };
});

// --- Helper: Week number ---
function getWeekNumber(ts: number) {
  return Math.floor(ts / (7 * 24 * 60 * 60 * 1000));
}

// --- API Handler ---
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  // Pagination
  const skip = Number(searchParams.get("skip") || 1);
  const limit = Number(searchParams.get("limit") || 5);

  // Filters
  const status = searchParams.get("status");
  const startDate = searchParams.get("startDate"); // timestamp
  const endDate = searchParams.get("endDate"); // timestamp

  // Sorting
  const sortBy = searchParams.get("sortBy"); // date | status | week
  const order = searchParams.get("order") || "asc";

  let data = [...mockTimesheets];

  // --- FILTERS ---
  if (status) {
    data = data.filter((item) => item.status === status);
  }

  if (startDate) {
    data = data.filter((item) => item.startTimestamp >= Number(startDate));
  }

  if (endDate) {
    data = data.filter((item) => item.endTimestamp <= Number(endDate));
  }

  // --- SORTING ---
  if (sortBy) {
    data.sort((a, b) => {
      let valA: number | string;
      let valB: number | string;

      switch (sortBy) {
        case "status":
          valA = a.status;
          valB = b.status;
          break;

        case "week":
          valA = getWeekNumber(a.startTimestamp);
          valB = getWeekNumber(b.startTimestamp);
          break;

        case "date":
        default:
          valA = a.startTimestamp;
          valB = b.startTimestamp;
          break;
      }

      if (valA < valB) return order === "asc" ? -1 : 1;
      if (valA > valB) return order === "asc" ? 1 : -1;
      return 0;
    });
  }

  // --- PAGINATION ---
  const total = data.length;
  const paginated = data.slice(skip, skip + limit);

  // Simulate delay
  await new Promise((res) => setTimeout(res, 400));

  return NextResponse.json({
    data: paginated,
    total,
    totalPages: Math.ceil(total / limit),
  });
}
