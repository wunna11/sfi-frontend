import { InferType, object, ref, string } from 'yup'
import { emailErrMsg, maxLenErrMsg, minLenErrMsg, requiredErrMsg } from './validation-message'
import { PASSWORD_MAX_LEN, PASSWORD_MIN_LEN, PHONE_FORMAT_REGEX } from './validation-format'

export const userRegisterSchema = object({
  name: string().required(),
  country: string().required(),
  phone: string().required().matches(PHONE_FORMAT_REGEX, 'Phone number is not valid'),
  email: string().email(emailErrMsg).required(requiredErrMsg('Email')).max(50, maxLenErrMsg(50)),
  password: string()
    .required(requiredErrMsg('Password'))
    .min(PASSWORD_MIN_LEN, minLenErrMsg(PASSWORD_MIN_LEN))
    .max(PASSWORD_MAX_LEN, maxLenErrMsg(PASSWORD_MAX_LEN)),
  confirm_password: string()
    .label('confirm password')
    .required(requiredErrMsg('Confirm Password'))
    .oneOf([ref('password')], 'Passwords must match')
})

export type RegisterVType = InferType<typeof userRegisterSchema>
