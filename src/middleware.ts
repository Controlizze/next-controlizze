import { NextRequest, NextResponse } from 'next/server'

export default function middleware(req: NextRequest) {
  const token = req.cookies.get('nextfinance.token')

  const homeUrl = new URL('/', req.url)
  const authUrl = new URL('/movements', req.url)

  if (!token) {
    if (
      req.nextUrl.pathname === '/' ||
      req.nextUrl.pathname === '/login' ||
      req.nextUrl.pathname === '/register' ||
      req.nextUrl.pathname === '/forgot-password'
    ) {
      return NextResponse.next()
    }

    return NextResponse.redirect(homeUrl)
  } else {
    if (
      req.nextUrl.pathname === '/movements' ||
      req.nextUrl.pathname === '/investment' ||
      req.nextUrl.pathname === '/user-profile'
    ) {
      return NextResponse.next()
    }

    return NextResponse.redirect(authUrl)
  }
}

export const config = {
  matcher: [
    '/',
    '/login',
    '/register',
    '/forgot-password',
    '/movements',
    '/investment',
    '/user-profile'
  ]
}
