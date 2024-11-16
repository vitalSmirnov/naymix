import { Select } from 'antd'
import { TeamShortType } from '../../entity/types/team/team'

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
  return (
    <Select
      mode={employee ? 'multiple' : 'tags'}
      allowClear
      options={teamComparer([])}
      onChange={handleChange}
    />
  )
}
