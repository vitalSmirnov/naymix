import { List } from 'antd'
import { Link } from 'react-router-dom'

type TeamItemProps = {
  username: string
  id: string
}

export const TeamItem = ({ username, id }: TeamItemProps) => {
  return (
    <List.Item>
      <Link
        style={{ textDecoration: 'none', color: 'white', fontWeight: 'medium' }}
        to={`/teams/${id}`}
      >
        {username}
      </Link>
    </List.Item>
  )
}
