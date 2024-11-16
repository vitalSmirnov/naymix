import { EmployeeType } from '../users/employee'
import { MemberType } from '../users/member'

export type TeamType = {
  id: string
  name: string
  description: string
  employees: EmployeeType[]
  applicants: MemberType[]
}
