import { List } from 'antd'
import { Link } from 'react-router-dom'
import { MemberType } from '../../../types/users/employee'

type ApplicantItemProps = {
  user: Pick<MemberType, 'full_name' | 'id'>
}

export const ApplicantItem = ({ user: { full_name, id } }: ApplicantItemProps) => {
  return (
    <List.Item>
      <Link
        style={{ textDecoration: 'none', color: 'white', fontWeight: 'medium' }}
        to={`/teams/${id}`}
      >
        {full_name}
      </Link>
    </List.Item>
  )
}
