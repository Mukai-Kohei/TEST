import Link from 'next/link'
import { CheckCircle, Home } from 'lucide-react'

export default async function SuccessPage({
  searchParams: searchParamsPromise,
}: {
  searchParams: Promise<{ id?: string }>
}) {
  const searchParams = await searchParamsPromise;
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-md p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          申込が完了しました！
        </h1>

        <p className="text-gray-600 mb-6">
          ご応募ありがとうございます。<br />
          確認メールをお送りしましたので、ご確認ください。
        </p>

        {searchParams.id && (
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600 mb-1">申込ID</p>
            <p className="font-mono text-sm text-gray-900">{searchParams.id}</p>
          </div>
        )}

        <div className="space-y-3">
          <p className="text-sm text-gray-600">
            3営業日以内にスタッフからご連絡いたします。<br />
            しばらくお待ちください。
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center justify-center w-full mt-6 px-6 py-3 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Home className="mr-2 h-5 w-5" />
          トップページに戻る
        </Link>
      </div>
    </div>
  )
}
