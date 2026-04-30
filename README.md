# ticktok-Timesheet-Application

## Live Deployment

You can access the deployed application here:  
[https://ticktock-timesheet.netlify.app/](https://ticktock-timesheet.netlify.app/)

## Getting Started

This project is built using Next.js and bootstrapped with create-next-app.

### Setup

1. Clone the repository  
```bash
git clone <repo-url>
```

2. Install dependencies  
```bash
npm install
```

3. Create a `.env` file in the root directory and add the required variables:

```bash
NEXTAUTH_SECRET=your_secret_key_here_run_openssl_rand_base64_32
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

4. Run the development server  
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Open your browser at:  
http://localhost:3000

---

## Test Credentials

- Email: testUser@test.com  
- Password: Abcd1234  

---

## Tech Stack

- Next.js 
- TypeScript
- NextAuth (Credentials-based auth)
- React Hook Form + Zod
- TanStack React Query
- Tailwind CSS
- Radix UI
- Lucide Icons

---

## Design / Implementation Notes

- App Router with server/client separation
- Middleware used for route protection
- Authentication handled via NextAuth credentials provider
- Timesheets and tasks use mock data (no DB integration yet)
- React Query used for caching, server state, and mutations
- Optimistic updates implemented for delete actions
- Basic error handling added at UI level for API failures
- Modal responsiveness still being improved
- TanStack Table can be added for advanced table handling
- Feature-based folder structure is used to make the codebase scalable and easier to extend with new modules in the future
- State management (Zustand/Redux) can be added later

---

## Time Spent

- Approximately 10 hours of development effort
