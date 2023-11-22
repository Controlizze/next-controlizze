import { NextRequest, NextResponse } from 'next/server'

export default function middleware(req: NextRequest) {
  const token = req.cookies.get('nextfinance.token')

  const homeUrl = new URL('/', req.url)
  const authUrl = new URL('/dashboard/movements', req.url)

  if (!token) {
    if (
      req.nextUrl.pathname === '/' ||
      req.nextUrl.pathname.startsWith('/auth') ||
      req.nextUrl.pathname.startsWith('/dashboard') ||
      req.nextUrl.pathname.startsWith('/others')
    ) {
      return NextResponse.next()
    }

    return NextResponse.redirect(homeUrl)
  } else {
    if (
      req.nextUrl.pathname.startsWith('/dashboard') ||
      req.nextUrl.pathname.startsWith('/others')
    ) {
      return NextResponse.next()
    }

    return NextResponse.redirect(authUrl)
  }
}

export const config = {
  matcher: ['/', '/auth/:path*', '/dashboard/:path*', '/others/:path*']
}
