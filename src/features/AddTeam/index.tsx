import { Button, Flex, Form, Input, Typography } from 'antd'
import { Container } from '../../shared/ui/Container'
import { useForm } from 'antd/es/form/Form'
import { useNavigate } from 'react-router-dom'
import { CreateTeamModel } from '../../entity/types/team/team'
import { useCreateTeamMutation } from '../../shared/api/querries/team/teamQuery'
import { RoutesEnum } from '../../app/router/routes'

const { Title } = Typography

export const TeamAddWidget = () => {
  const [form] = useForm()
  const [trigger] = useCreateTeamMutation({})
  const navigate = useNavigate()

  const onFinish = (e: CreateTeamModel) => {
    trigger(e).then(response => {
      if (response.error) {
        console.log('suck')
      } else {
        navigate(RoutesEnum.DEFAULT)
      }
    })
  }

  return (
    <div
      style={{
        backgroundColor: '##F0F6FA',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container>
        <Flex
          gap={'24px'}
          justify='center'
          align='center'
        >
          <Button onClick={() => navigate(-1)}>Назад</Button>
          <Title>{`Добавление команды`}</Title>
        </Flex>
        <Form
          layout='vertical'
          style={{ maxWidth: '800px', width: '100%' }}
          form={form}
          onFinish={onFinish}
        >
          <Form.Item
            name='name'
            label='Название'
            rules={[{ required: true, message: 'Введите название команды' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='description'
            label='Описание'
          >
            <Input />
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
