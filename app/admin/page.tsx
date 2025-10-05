import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { ApplicationsList } from '@/components/applications-list'
import { LogOut } from 'lucide-react'
import Link from 'next/link'

export default async function AdminPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/admin/login')
  }

  // 応募データを取得
  const { data: applications, error } = await supabase
    .from('applications')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('データ取得エラー:', error)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">応募管理</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">{user.email}</span>
            <form action="/api/auth/logout" method="post">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <LogOut className="mr-2 h-4 w-4" />
                ログアウト
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              応募一覧 ({applications?.length || 0}件)
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              受講希望者の応募情報を確認できます
            </p>
          </div>
          <Link
            href="/"
            className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
          >
            トップページへ
          </Link>
        </div>

        <ApplicationsList applications={applications || []} />
      </main>
    </div>
  )
}
