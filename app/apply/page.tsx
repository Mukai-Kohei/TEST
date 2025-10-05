import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { ApplicationForm } from '@/components/application-form'

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          トップページに戻る
        </Link>

        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              AIスクール 受講申込
            </h1>
            <p className="text-gray-600">
              以下のフォームに必要事項を入力して、お申し込みください。
            </p>
          </div>

          <ApplicationForm />
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="font-semibold text-blue-900 mb-2">申込の流れ</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm text-blue-800">
            <li>申込フォームに必要事項を入力</li>
            <li>申込金5,000円をお支払い（ダミー実装）</li>
            <li>申込完了メールが届きます</li>
            <li>スクールから詳細のご連絡をいたします</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
