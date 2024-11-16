import { AstroType } from '../astro'
import { LocationType } from '../location'
import { TeamType } from '../team/team'

export type EmployeeType = {
  id: string
  full_name: string
  birth_date: string
  birth_place: LocationType
  email: string
  phone: string
  status: string
  team: TeamType
  position: string
  astro: AstroType
}
