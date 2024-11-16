import { EmployeeType, MemberType } from '../users/employee'

export type TeamType = {
  id: string
  name: string
  description: string
  employees: EmployeeType[]
  applicants: MemberType[]
}

export type TeamShortType = {
  id: string
  name: string
  description: string
}
