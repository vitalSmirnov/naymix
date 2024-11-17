import { Collapse } from 'antd'
import { users } from '../../../app/MOCK/mock'
import { EmployeeItem } from './EmployeeItem'
import { RoutesEnum } from '../../../app/router/routes'

type EmployeeCollapseProps = {
  searchString: string
}

export const EmployeeCollapse = ({ searchString }: EmployeeCollapseProps) => {
  const data = users.filter(user => user.fullName.toLowerCase().includes(searchString.toLowerCase()))
  return (
    <Collapse
      ghost
      expandIconPosition='end'
    >
      {data.map(item => {
        return (
          <Collapse.Panel
            header={item.fullName}
            key={item.id}
          >
            <EmployeeItem
              linkTo={RoutesEnum.EMPLOYEE.replace(':id', item.id)}
              employee={item}
            />
          </Collapse.Panel>
        )
      })}
    </Collapse>
  )
}
