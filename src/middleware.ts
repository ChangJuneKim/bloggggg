// middleware.js file
import { NextRequest, NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/posts' || request.nextUrl.pathname === '/posts/pages') {
    return NextResponse.redirect(new URL(`/posts/pages/1`, request.url));
  }
  if (request.nextUrl.pathname === '/posts/categories') {
    return NextResponse.redirect(new URL(`/posts/categories/dev/pages/1`, request.url));
  }
  // 'all', 'dev', 'life', 'fire' 중 하나와 매치되는 정규 표현식 패턴
  const pathRegex = /^\/posts\/categories\/(all|dev|life|fire)(\/pages)?$/;
  const match = request.nextUrl.pathname.match(pathRegex);

  if (match && match[1]) {
    // match[1]에는 매치된 첫 번째 캡처 그룹(즉, 'all', 'dev', 'life', 'fire' 중 하나)의 값이 들어 있음
    const category = match[1];
    // 해당 카테고리의 첫 페이지 URL로 리다이렉트
    return NextResponse.redirect(new URL(`/posts/categories/${category}/pages/1`, request.url));
  }

  return NextResponse.next();
}
