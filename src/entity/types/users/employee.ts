import { AstroType } from '../astro/astro'
import { LocationType } from '../location/location'
import { TeamShortType } from '../team/team'

export type UserType = {
  id: string
  fullName: string
  birthDate: string
  birthPlace: LocationType
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
} & Omit<UserType, 'position' | 'id'>

export type CreateEmployeeModel = Omit<UserType, 'id'>
