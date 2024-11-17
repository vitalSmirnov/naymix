import { CreateTeamModel, TeamShortType } from '../../../../entity/types/team/team'
import { EmployeeType, MemberType } from '../../../../entity/types/users/employee'

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
  employees: EmployeeType[]
  applicants: MemberType[]
}
export type CreateTeamPayload = CreateTeamModel
export type CreateTeamResponse = {}
export type AddTeamMemberPayload = {
  teamId: string
  body: CreateTeamModel
}
export type AddTeamMemberResponse = {}
