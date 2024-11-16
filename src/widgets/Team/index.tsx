import { Button, Flex, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import { EmployeeWidget } from './Employee'
import { ApplicantConcreteWidget } from './ApplicantConcrete'

const { Title } = Typography

const TeamHat = () => {
  const navigate = useNavigate()
  return (
    <Flex gap={'8px'}>
      <Button onClick={() => navigate(-1)}>Назад</Button>
      <Title></Title>
    </Flex>
  )
}

export const ConcreteTeamsWidget = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <TeamHat />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr' }}>
        <EmployeeWidget />
        <ApplicantConcreteWidget />
      </div>
    </div>
  )
}
