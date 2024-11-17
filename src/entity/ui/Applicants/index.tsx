import { List } from 'antd'
import { users } from '../../../app/MOCK/mock'
import { ApplicantItem } from './ApplicantItem'

type ApplicantsProps = {
  searchString: string
}

export const Applicants = ({ searchString }: ApplicantsProps) => {
  const data = users.filter(user => user.fullName.toLowerCase().includes(searchString.toLowerCase()))
  return (
    <List bordered={false}>
      {data.map(item => {
        return (
          <ApplicantItem
            key={item.id}
            user={item}
          />
        )
      })}
    </List>
  )
}
