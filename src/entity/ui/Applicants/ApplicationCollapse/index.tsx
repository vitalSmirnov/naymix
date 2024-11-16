import { Collapse } from 'antd'
import { users } from '../../../../app/MOCK/mock'
import { EmployeeItem } from '../../Employee/EmployeeItem'
import { RoutesEnum } from '../../../../app/router/routes'

type ApplicantCollapseProps = {
  searchString: string
}

export const ApplicantCollapse = ({ searchString }: ApplicantCollapseProps) => {
  const data = users.filter(user => user.full_name.toLowerCase().includes(searchString.toLowerCase()))
  return (
    <Collapse
      ghost
      expandIconPosition='end'
    >
      {data.map(item => {
        return (
          <Collapse.Panel
            header={item.full_name}
            key={item.id}
          >
            <EmployeeItem
              linkTo={RoutesEnum.APPLICANT.replace(':id', item.id)}
              employee={item}
            />
          </Collapse.Panel>
        )
      })}
    </Collapse>
  )
}
