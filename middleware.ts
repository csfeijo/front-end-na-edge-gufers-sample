import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Add custom headers for edge computing demo
  const response = NextResponse.next()

  response.headers.set("X-Edge-Location", process.env.VERCEL_REGION || "unknown")
  response.headers.set("X-Powered-By-Edge", "true")

  return response
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
}
