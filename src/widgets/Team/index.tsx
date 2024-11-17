import { Button, Flex, Spin, Typography } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'
import { EmployeeWidget } from './Employee'
import { ApplicantConcreteWidget } from './ApplicantConcrete'
import { useGetMembresQuery } from '../../shared/api/querries/team/teamQuery'

const { Title, Text } = Typography
type TitleProps = {
  title: string
  description: string
}

const TeamHat = ({ title, description }: TitleProps) => {
  const navigate = useNavigate()
  return (
    <Flex gap={'8px'}>
      <Button onClick={() => navigate(-1)}>Назад</Button>
      <Title>{title}</Title>
      <Text>{description}</Text>
    </Flex>
  )
}

export const ConcreteTeamsWidget = () => {
  const { id } = useParams()

  const { data, isLoading } = useGetMembresQuery({ teamId: id! })
  if (isLoading) {
    return <Spin />
  }
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <TeamHat
        title={data?.team.name!}
        description={data?.team.description!}
      />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr' }}>
        <EmployeeWidget data={data?.team.employees!} />
        <ApplicantConcreteWidget data={data?.team.applicants!} />
      </div>
    </div>
  )
}
