import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "./lib/authOptions";
import { getToken } from "next-auth/jwt";

// This function can be marked `async` if using `await` inside
export async function proxy(request) {
  //get session
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  const isAuthenticated = Boolean(token);

  //get cookie
  const authCookie = request.cookies.get("auth");
  if ((authCookie && authCookie.value === "true") || isAuthenticated) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/dashboard/:path*", "/add-product/:path*", "/cart/:path*"],
};
