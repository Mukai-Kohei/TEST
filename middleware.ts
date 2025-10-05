import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // Supabase未設定時はミドルウェアをスキップ
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL === 'your_supabase_url') {
    return NextResponse.next()
  }

  // Supabase設定済みの場合のみ認証チェック
  const { updateSession } = await import('@/lib/supabase/middleware')
  return await updateSession(request)
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
