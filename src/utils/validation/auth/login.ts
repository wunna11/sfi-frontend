import { InferType, object, string } from 'yup'
import { maxLenErrMsg, minLenErrMsg, requiredErrMsg } from './validation-message'
import { PASSWORD_MAX_LEN, PASSWORD_MIN_LEN, PHONE_FORMAT_REGEX } from './validation-format'

export const userLoginSchema = object({
  phone: string()
    .required(requiredErrMsg('Phone'))
    .matches(PHONE_FORMAT_REGEX, 'Phone number is not valid'),
  password: string()
    .required(requiredErrMsg('Password'))
    .min(PASSWORD_MIN_LEN, minLenErrMsg(PASSWORD_MIN_LEN))
    .max(PASSWORD_MAX_LEN, maxLenErrMsg(PASSWORD_MAX_LEN))
})

export type LoginVType = InferType<typeof userLoginSchema>
