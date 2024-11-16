import { Button, Form, Input, Typography } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { Container } from '../../shared/ui/Container'
import { Link } from 'react-router-dom'

const { Title, Text } = Typography

export const LoginWidget = () => {
  const [form] = useForm()
  return (
    <Container>
      <Title level={3}>Вход</Title>
      <Form
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
  )
}
