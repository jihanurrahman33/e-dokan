import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function proxy(request) {
  //get cookie
  const authCookie = request.cookies.get("auth");
  if (authCookie && authCookie.value === "true") {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/about/:path*", "/add-product/:path*"],
};
