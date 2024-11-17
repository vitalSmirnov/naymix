import { CreateTeamModel, TeamShortType, TeamType } from '../../../../entity/types/team/team'
export type GetTeamsPayload = {
  limit?: number
  offset?: number
}
export type GetTeamsResponse = {
  teams: TeamShortType[]
}
export type GetMembresPayload = {
  teamId: string
}
export type GetMembresResponse = {
  success: boolean
  team: TeamType
}
export type CreateTeamPayload = CreateTeamModel
export type CreateTeamResponse = {
  succsess: boolean
  message: string
}
export type AddTeamMemberPayload = {
  teamId: string
  body: {
    fullName: string
    birthDate: string
    birthPlace: string
    email: string
    phone: string
    position: string
    role: 'pending' | 'employee'
  }
}
export type AddTeamMemberResponse = {
  succsess: boolean
  message: string
}
