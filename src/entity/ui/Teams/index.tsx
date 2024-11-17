import { List, Spin } from 'antd'
import { TeamItem } from './TeamItem'
import { useGetTeamsQuery } from '../../../shared/api/querries/team/teamQuery'

type TeamsProps = {
  searchString: string
}

export const Teams = ({ searchString }: TeamsProps) => {
  const { data, isLoading } = useGetTeamsQuery({})

  if (isLoading) {
    return <Spin />
  }
  return (
    <List
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
      bordered={false}
    >
      {data &&
        data.teams.map(item => {
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
