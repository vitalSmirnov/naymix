import { AstroType } from '../astro/astro'
import { TeamShortType } from '../team/team'

export type UserType = {
  id: string
  fullName: string
  birthDate: string
  birthPlace: string
  email: string
  phone: string
  status: string
  team: TeamShortType
  position: string | string[]
  astro: AstroType
}

export type MemberType = UserType

export type EmployeeType = UserType

export type CreateApplicantModel = {
  position: string[]
  role: 'pending'
} & Omit<UserType, 'position' | 'id'>

export type CreateEmployeeModel = Omit<UserType, 'id'> & { role: 'employee' }
