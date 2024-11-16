import { List } from 'antd'
import { teams } from '../../../app/MOCK/mock'
import { TeamItem } from './TeamItem'

type TeamsProps = {
  searchString: string
}

export const Teams = ({ searchString }: TeamsProps) => {
  const data = teams.filter(user => user.name.toLowerCase().includes(searchString.toLowerCase()))
  return (
    <List bordered={false}>
      {data.map(item => {
        return (
          <TeamItem
            key={item.id}
            team={item}
          />
        )
      })}
    </List>
  )
}
