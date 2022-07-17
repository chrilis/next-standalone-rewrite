import { NextResponse } from "next/server"

export function middleware(request) {
  if (request.nextUrl.pathname === '/test-middleware/') {
    console.log('rewrite', request.nextUrl.pathname)
    return NextResponse.rewrite(new URL('/index/', request.url))
  }
}
