import { Flex, Typography } from 'antd'
import { Container } from '../../../../shared/ui/Container'
import { UserType } from '../../../types/users/employee'

type BioProps = {
  employee?: boolean
  user: UserType
}

const { Text, Title } = Typography

export const Bio = ({ employee, user: { phone, email, birthDate, birthPlace, position } }: BioProps) => {
  return (
    <Container color='#0E6565'>
      <Title>Личная информация</Title>
      <Flex
        vertical
        gap={'12px'}
      >
        <Text>{`Телефон: ${phone}`}</Text>
        <Text>{`Почта: ${email}`}</Text>
        <Text>{`Дата рождения: ${birthDate}`}</Text>
        <Text>{`Время рождения: ${birthDate}`}</Text>
        <Text>{`Место рождения: ${birthPlace}`}</Text>
        <Text>{`${employee ? 'Д' : 'Ожидаемая д'}олжность: ${position}`}</Text>
      </Flex>
    </Container>
  )
}
