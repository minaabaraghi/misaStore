// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { isMobile } from "./lib/isMobile";

export function middleware(req: NextRequest) {
  const ua = req.headers.get("user-agent") || "";
  const device = isMobile(ua) ? "mobile" : "desktop";

  const res = NextResponse.next();
  res.headers.set("x-device-type", device);
  return res;
}

export const config = {
  matcher: ["/", "/((?!_next|favicon.ico).*)"], // روی همه صفحه‌ها اعمال میشه بجز فایلای استاتیک
};
