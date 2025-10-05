import { z } from 'zod'

export const applicationSchema = z.object({
  full_name: z.string().min(2, '氏名は2文字以上で入力してください'),
  email: z.string().email('有効なメールアドレスを入力してください'),
  phone: z.string().regex(/^[0-9\-]+$/, '有効な電話番号を入力してください'),
  course: z.enum(['basic', 'advanced', 'professional'], {
    message: 'コースを選択してください',
  }),
  message: z.string().optional(),
})

export type ApplicationFormValues = z.infer<typeof applicationSchema>
