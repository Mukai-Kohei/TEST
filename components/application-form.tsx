'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { applicationSchema, type ApplicationFormValues } from '@/lib/validations/application'
import { Loader2 } from 'lucide-react'

export function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema),
  })

  const onSubmit = async (data: ApplicationFormValues) => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // ダミー実装: APIエンドポイントに送信
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('申込の送信に失敗しました')
      }

      const result = await response.json()

      // 成功ページにリダイレクト
      window.location.href = `/apply/success?id=${result.id}`
    } catch (error) {
      console.error('申込エラー:', error)
      setSubmitError('申込の送信中にエラーが発生しました。もう一度お試しください。')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* 氏名 */}
      <div>
        <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-2">
          氏名 <span className="text-red-500">*</span>
        </label>
        <input
          {...register('full_name')}
          type="text"
          id="full_name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="山田 太郎"
        />
        {errors.full_name && (
          <p className="mt-1 text-sm text-red-600">{errors.full_name.message}</p>
        )}
      </div>

      {/* メールアドレス */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          メールアドレス <span className="text-red-500">*</span>
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="example@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* 電話番号 */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          電話番号 <span className="text-red-500">*</span>
        </label>
        <input
          {...register('phone')}
          type="tel"
          id="phone"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="090-1234-5678"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>

      {/* 希望コース */}
      <div>
        <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
          希望コース <span className="text-red-500">*</span>
        </label>
        <select
          {...register('course')}
          id="course"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">選択してください</option>
          <option value="basic">ベーシックコース（¥198,000）</option>
          <option value="advanced">アドバンスコース（¥398,000）</option>
          <option value="professional">プロフェッショナルコース（¥698,000）</option>
        </select>
        {errors.course && (
          <p className="mt-1 text-sm text-red-600">{errors.course.message}</p>
        )}
      </div>

      {/* 任意メッセージ */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          ご質問・ご要望（任意）
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="ご質問やご要望がありましたらご記入ください"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* エラーメッセージ */}
      {submitError && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-600">{submitError}</p>
        </div>
      )}

      {/* 送信ボタン */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
            送信中...
          </>
        ) : (
          '申し込む'
        )}
      </button>

      <p className="text-sm text-gray-600 text-center">
        ※ 申込金5,000円のお支払いは次のステップで行います
      </p>
    </form>
  )
}
