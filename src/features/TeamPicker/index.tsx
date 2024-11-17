import { Select, Spin } from 'antd'
import { TeamShortType } from '../../entity/types/team/team'
import { useGetTeamsQuery } from '../../shared/api/querries/team/teamQuery'

type TeamPickerProps = {
  employee?: boolean
}

const teamComparer = (team: TeamShortType[]) => {
  return team.map(teamItem => {
    return {
      label: teamItem.name,
      value: teamItem.id,
    }
  })
}

const handleChange = (value: string[]) => {
  console.log(`selected ${value}`)
}

export const TeamPicker = ({ employee = false }: TeamPickerProps) => {
  const { data, isLoading } = useGetTeamsQuery({})

  if (isLoading) {
    return <Spin />
  }
  return (
    <Select
      mode={employee ? 'multiple' : 'tags'}
      allowClear
      options={teamComparer(data?.teams!)}
      onChange={handleChange}
    />
  )
}
