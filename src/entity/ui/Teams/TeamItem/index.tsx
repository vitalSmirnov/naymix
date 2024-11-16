import { List } from 'antd'
import { Link } from 'react-router-dom'
import { TeamShortType } from '../../../types/team/team'

type TeamItemProps = {
  team: Pick<TeamShortType, 'name' | 'id'>
}

export const TeamItem = ({ team: { name, id } }: TeamItemProps) => {
  return (
    <List.Item>
      <Link
        style={{ textDecoration: 'none', color: 'white', fontWeight: 'medium' }}
        to={`/teams/${id}`}
      >
        {name}
      </Link>
    </List.Item>
  )
}
