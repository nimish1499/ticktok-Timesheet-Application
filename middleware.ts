import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { ROUTES } from "./constants";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });

  const isAuthPage = req.nextUrl.pathname.startsWith("/auth");

  if (!token && !isAuthPage) {
    return NextResponse.redirect(new URL(ROUTES.LOGIN, req.url));
  }

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL(ROUTES.DASHBOARD, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/timesheets/:path*", "/auth/:path*"],
};