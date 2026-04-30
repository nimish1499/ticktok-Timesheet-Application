import { NextResponse } from "next/server";
import { mockTimesheets } from "../../route";

type Context = {
  params: Promise<{ id: string }>;
};

export async function GET(_: Request, context: Context ) {
  const { id: timesheetId } = await context.params;

  const timesheet = mockTimesheets.find((t) => t.id === Number(timesheetId));

  if (!timesheet) {
    return NextResponse.json(
      { message: "Timesheet not found" },
      { status: 404 },
    );
  }

  return NextResponse.json({
    data: timesheet.tasks,
  });
}

export async function POST(
  req: Request,
  context: Context,
) {
  const { id: timesheetId } = await context.params;
  const body = await req.json();

  const timesheet = mockTimesheets.find((t) => t.id === Number(timesheetId));

  if (!timesheet) {
    return NextResponse.json(
      { message: "Timesheet not found" },
      { status: 404 },
    );
  }

  const newTask = {
    id: Math.floor(Math.random() * 1000),
    name: body.name,
    description: body.description,
    projectName: body.projectName,
    hoursLogged: body.hoursLogged ?? 1,
  };

  timesheet.tasks.push(newTask);

  return NextResponse.json({
    message: "Task created successfully.",
    data: newTask,
  });
}

export async function DELETE(
  req: Request,
  context: Context
) {
  const { id: timesheetId } = await context.params;
  const { searchParams } = new URL(req.url);
  const taskId = Number(searchParams.get("taskId"));

  const timesheet = mockTimesheets.find((t) => t.id === Number(timesheetId));

  if (!timesheet) {
    return NextResponse.json(
      { message: "Timesheet not found" },
      { status: 404 },
    );
  }

  const taskIndex = timesheet.tasks.findIndex((task) => task.id === taskId);

  if (taskIndex === -1) {
    return NextResponse.json({ message: "Task not found" }, { status: 404 });
  }

  const deletedTask = timesheet.tasks.splice(taskIndex, 1);

  return NextResponse.json({
    message: "Task deleted successfully",
    data: deletedTask[0],
  });
}

export async function PATCH(
  req: Request,
  context: Context
) {
  const { id: timesheetId } = await context.params;
  const { searchParams } = new URL(req.url);
  const taskId = Number(searchParams.get("taskId"));

  const body = await req.json();

  const timesheet = mockTimesheets.find((t) => t.id === Number(timesheetId));

  if (!timesheet) {
    return NextResponse.json(
      { message: "Timesheet not found" },
      { status: 404 },
    );
  }

  const task = timesheet.tasks.find((task) => task.id === taskId);

  if (!task) {
    return NextResponse.json({ message: "Task not found" }, { status: 404 });
  }

  // Update fields (partial update support)
  task.name = body.name ?? task.name;
  task.description = body.description ?? task.description;
  task.projectName = body.projectName ?? task.projectName;
  task.hoursLogged = body.hoursLogged ?? task.hoursLogged;

  return NextResponse.json({
    message: "Task updated successfully",
    data: task,
  });
}
