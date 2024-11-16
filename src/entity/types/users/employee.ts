import { AstroType } from '../astro/astro'
import { LocationType } from '../location/location'
import { TeamShortType } from '../team/team'

export type UserType = {
  id: string
  full_name: string
  birth_date: string
  birth_place: LocationType
  email: string
  phone: string
  status: string
  team: TeamShortType
  position: string
  astro: AstroType
}

export type MemberType = UserType

export type EmployeeType = UserType
