import { List } from 'antd'
import { Link } from 'react-router-dom'
import { MemberType } from '../../../types/users/employee'

type ApplicantItemProps = {
  user: Pick<MemberType, 'fullName' | 'id'>
}

export const ApplicantItem = ({ user: { fullName, id } }: ApplicantItemProps) => {
  return (
    <List.Item>
      <Link
        style={{ textDecoration: 'none', color: 'white', fontWeight: 'medium' }}
        to={`/teams/${id}`}
      >
        {fullName}
      </Link>
    </List.Item>
  )
}
