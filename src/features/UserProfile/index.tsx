import { Button, DatePicker, Flex, Form, Input, Select, Typography } from 'antd'
import { Container } from '../../shared/ui/Container'
import { useForm } from 'antd/es/form/Form'
import { useNavigate } from 'react-router-dom'
import { Option } from 'antd/es/mentions'
import { TeamPicker } from '../TeamPicker'
import { UserType } from '../../entity/types/users/employee'
import { useAddTeamMemberMutation } from '../../shared/api/querries/team/teamQuery'

type UserProfileProps = {
  employee?: boolean
}
const { Title } = Typography

const prefixSelector = (
  <Form.Item
    name='prefix'
    noStyle
  >
    <Select style={{ width: 70, color: 'black' }}>
      <Option value='8'>+7</Option>
    </Select>
  </Form.Item>
)

export const UserAddWidget = ({ employee = false }: UserProfileProps) => {
  const [form] = useForm()

  const [trigger] = useAddTeamMemberMutation({})

  const navigate = useNavigate()

  const onFinish = (e: UserType) => {
    if (employee) {
      trigger({ teamId: e.team.id, body: { ...e, role: 'employee', birthPlace: e.birthPlace } })
    }
    {
      trigger({ teamId: e.team.id, body: { ...e, role: 'pending', birthPlace: e.birthPlace } })
    }
    navigate('/profile')
  }

  return (
    <div
      style={{ backgroundColor: '#F0F6FA', width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}
    >
      <Container>
        <Flex
          gap={'24px'}
          justify='center'
          align='center'
        >
          <Button onClick={() => navigate(-1)}>Назад</Button>
          <Title>{`Добавление ${employee ? 'сотрудника' : 'соискателя'}`}</Title>
        </Flex>
        <Form
          layout='vertical'
          style={{ maxWidth: '800px', width: '100%' }}
          form={form}
          onFinish={onFinish}
        >
          <Form.Item
            name='fullName'
            label='ФИО'
            rules={[{ required: true, message: 'Введите ФИО' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='phone'
            label='Телефон'
            rules={[{ required: true, message: 'Введите Телефон' }]}
          >
            <Input addonBefore={prefixSelector} />
          </Form.Item>
          <Form.Item
            name='email'
            label='Почта'
            rules={[
              {
                type: 'email',
                message: 'Введите email',
              },
              {
                required: true,
                message: 'Введите ваш email',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='position'
            label={`${employee ? 'Должность' : 'Ожидаемая должность'}`}
            rules={[{ required: true, message: 'Введите должность' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='birthDate'
            label={'Дата и время рождения'}
            rules={[{ required: true, message: 'Введите дату рождения' }]}
          >
            <DatePicker showTime />
          </Form.Item>
          <Form.Item
            name='birthPlace'
            label={'Город рождения'}
            rules={[{ required: true, message: 'Введите город' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='team'
            label={'Команда'}
            rules={[{ required: true, message: 'Выберите комманду' }]}
          >
            <TeamPicker employee={employee} />
          </Form.Item>
          <Form.Item>
            <Button
              block
              type='primary'
              htmlType='submit'
            >
              Добавить
            </Button>
          </Form.Item>
        </Form>
      </Container>
    </div>
  )
}
