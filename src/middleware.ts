// middleware.js file
import { NextRequest, NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/posts' || request.nextUrl.pathname === '/posts/pages') {
    return NextResponse.rewrite(new URL(`/posts/pages/1`, request.url));
  }
  return NextResponse.next();
}
