import { Collapse, Spin } from 'antd'
import { EmployeeItem } from '../../Employee/EmployeeItem'
import { RoutesEnum } from '../../../../app/router/routes'
import { useGetMembresQuery } from '../../../../shared/api/querries/team/teamQuery'
import { useParams } from 'react-router-dom'
import { MemberType } from '../../../types/users/employee'

type ApplicantCollapseProps = {
  searchString: string
  data: MemberType[]
}

export const ApplicantCollapse = ({ searchString, data }: ApplicantCollapseProps) => {
  return (
    <Collapse
      ghost
      expandIconPosition='end'
    >
      {data &&
        data.map(item => {
          return (
            <Collapse.Panel
              header={item.fullName}
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
