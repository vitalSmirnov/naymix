import { Button, Form, Input, Typography } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { Container } from '../../shared/ui/Container'
import { Link, useNavigate } from 'react-router-dom'
import { LoginCredentials } from '../../entity/types/credentials/loginCredentials'
import { RoutesEnum } from '../../app/router/routes'
import { useLoginMutation } from '../../shared/api/querries/auth/authQuery'

const { Title, Text } = Typography

export const LoginWidget = () => {
  const [form] = useForm()
  const [trigger] = useLoginMutation()
  const navigate = useNavigate()

  const onFinish = (values: LoginCredentials) => {
    trigger(values).then(response => {
      if (response.error) {
        form.resetFields()
      } else {
        sessionStorage.setItem('accessToken', response.data.access_token)
        navigate(RoutesEnum.DEFAULT)
      }
    })
  }

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Container>
        <Title level={3}>Вход</Title>
        <Form
          onFinish={onFinish}
          form={form}
          layout='vertical'
        >
          <Form.Item
            label='Почта'
            name='email'
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
            label='Пароль'
            name='password'
            rules={[
              {
                required: true,
                message: 'Введите пароль',
                min: 6,
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button
              block
              type='primary'
              htmlType='submit'
            >
              Войти
            </Button>
          </Form.Item>
        </Form>
        <span style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Text>
            Ещё нет аккаунта? <Link to={RoutesEnum.SIGNIN}>Регистрация</Link>
          </Text>
        </span>
      </Container>
    </div>
  )
}
