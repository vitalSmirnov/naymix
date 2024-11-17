import { TokenModel } from '../../../../entity/types/auth/tokenModel'
import { LoginCredentials } from '../../../../entity/types/credentials/loginCredentials'
import { RegisterCredentials } from '../../../../entity/types/credentials/registerCredentials'

export type LoginPayload = LoginCredentials
export type LoginResponse = TokenModel

export type RegisterPayload = RegisterCredentials
export type RegisterResponse = {
  success: true
  message: string
}
