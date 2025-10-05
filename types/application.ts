export type CourseType = 'basic' | 'advanced' | 'professional'

export interface Application {
  id: string
  full_name: string
  email: string
  phone: string
  course: CourseType
  message?: string
  payment_status: 'pending' | 'completed' | 'failed'
  payment_intent_id?: string
  created_at: string
  updated_at: string
}

export interface ApplicationFormData {
  full_name: string
  email: string
  phone: string
  course: CourseType
  message?: string
}
