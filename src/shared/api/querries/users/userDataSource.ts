import { UserType } from '../../../../entity/types/users/employee'

export type GetMemberPayload = {
  memberId: string
}
export type GetMemberResponse = {
  success: boolean
  member: UserType
}
