import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { applicationSchema } from '@/lib/validations/application'

// Service Role Keyを使用するクライアント（RLSをバイパス）
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // バリデーション
    const validatedData = applicationSchema.parse(body)

    // Supabaseに保存
    const { data, error } = await supabaseAdmin
      .from('applications')
      .insert({
        full_name: validatedData.full_name,
        email: validatedData.email,
        phone: validatedData.phone,
        course: validatedData.course,
        message: validatedData.message || null,
        payment_status: 'pending', // ダミー実装のため pending で保存
        payment_intent_id: null,
      })
      .select()
      .single()

    if (error) {
      console.error('Supabase挿入エラー:', error)
      return NextResponse.json(
        { error: 'データベース保存に失敗しました' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      id: data.id,
      message: '申込を受け付けました',
    })
  } catch (error) {
    console.error('申込処理エラー:', error)
    return NextResponse.json(
      { error: '申込の処理に失敗しました' },
      { status: 500 }
    )
  }
}
