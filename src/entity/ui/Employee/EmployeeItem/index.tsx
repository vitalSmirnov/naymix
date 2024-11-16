import { Flex, Progress, Typography } from 'antd'
import { EmployeeType } from '../../../types/users/employee'
import { Link } from 'react-router-dom'

type EmployeeItemProps = {
  employee: EmployeeType
  linkTo: string
}

const { Text } = Typography

export const EmployeeItem = ({ employee: { email, phone, position }, linkTo }: EmployeeItemProps) => {
  return (
    <Flex>
      <Text>{phone}</Text>
      <Text>{email}</Text>
      <Text>{position}</Text>
      <Flex
        gap={'16px'}
        align='center'
      >
        <Text>Совместимость</Text>
        <Progress
          percentPosition={{ align: 'end', type: 'outer' }}
          percent={50}
          size='small'
        />
      </Flex>
      <Link to={linkTo}>Посмотреть подробную информацию</Link>
    </Flex>
  )
}
