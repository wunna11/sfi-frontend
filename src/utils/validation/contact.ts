import { InferType, object, string } from 'yup'
import { emailErrMsg, maxLenErrMsg, requiredErrMsg } from './auth/validation-message'

export const userContactSchema = object({
  message: string().required(),
  email: string().email(emailErrMsg).required(requiredErrMsg('Email')).max(50, maxLenErrMsg(50))
})

export type ContactVType = InferType<typeof userContactSchema>
