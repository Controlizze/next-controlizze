import { NextRequest, NextResponse } from 'next/server'

import { parseCookies } from 'nookies'

export default function middleware(req: NextRequest) {
  const { ['nextfinance.token']: token } = parseCookies()

  const signUrl = new URL('/', req.url)
  const authUrl = new URL('/movements', req.url)

  if (!token) {
    if (req.nextUrl.pathname === '/') {
      return NextResponse.next()
    }

    return NextResponse.redirect(signUrl)
  } else {
    return NextResponse.redirect(authUrl)
  }
}

export const config = {
  matcher: ['/', '/movements', '/investment', '/user-profile']
}
