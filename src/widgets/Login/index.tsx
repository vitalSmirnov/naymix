import { Button, Form, Input, Typography } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { Container } from '../../shared/ui/Container'
import { Link } from 'react-router-dom'
import { LoginCredentials } from '../../entity/types/credentials/loginCredentials'

const { Title, Text } = Typography

export const LoginWidget = () => {
  const [form] = useForm()

  const onFinish = (values: LoginCredentials) => {
    console.log(values)
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
                min: 12,
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
        <Text>
          Ещё нет аккаунта? <Link to='/register'>Регистрация</Link>
        </Text>
      </Container>
    </div>
  )
}
