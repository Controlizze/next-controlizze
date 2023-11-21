import { NextRequest, NextResponse } from 'next/server'

export default function middleware(req: NextRequest) {
  const token = req.cookies.get('nextfinance.token')

  const homeUrl = new URL('/', req.url)
  const authUrl = new URL('/dashboard/movements', req.url)

  if (!token) {
    if (
      req.nextUrl.pathname === '/' ||
      req.nextUrl.pathname === '/auth/login' ||
      req.nextUrl.pathname === '/auth/register' ||
      req.nextUrl.pathname === '/auth/forgot-password'
    ) {
      return NextResponse.next()
    }

    return NextResponse.redirect(homeUrl)
  } else {
    if (
      req.nextUrl.pathname === '/dashboard/movements' ||
      req.nextUrl.pathname === '/others/investment' ||
      req.nextUrl.pathname === '/others/user-profile'
    ) {
      return NextResponse.next()
    }

    return NextResponse.redirect(authUrl)
  }
}

export const config = {
  matcher: [
    '/',
    '/auth/login',
    '/auth/register',
    '/auth/forgot-password',
    '/dashboard/movements',
    '/others/investment',
    '/others/user-profile'
  ]
}
