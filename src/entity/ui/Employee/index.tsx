import { Collapse } from 'antd'
import { EmployeeItem } from './EmployeeItem'
import { RoutesEnum } from '../../../app/router/routes'
import { EmployeeType } from '../../types/users/employee'

type EmployeeCollapseProps = {
  searchString: string
  data: EmployeeType[]
}

export const EmployeeCollapse = ({ searchString, data }: EmployeeCollapseProps) => {
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
