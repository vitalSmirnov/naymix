import { Button, Form, Input, Typography } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { Container } from '../../shared/ui/Container'
import { Link, useNavigate } from 'react-router-dom'
import { RegisterCredentials } from '../../entity/types/credentials/registerCredentials'
import { RoutesEnum } from '../../app/router/routes'
import { useRegisterMutation } from '../../shared/api/querries/auth/authQuery'

const { Title, Text } = Typography

export const RegisterWidget = () => {
  const [form] = useForm()
  const [trigger] = useRegisterMutation()
  const navigate = useNavigate()

  const onFinish = (values: RegisterCredentials) => {
    trigger(values).then(response => {
      if (response.error) {
        form.resetFields()
      } else {
        navigate(RoutesEnum.LOGIN)
      }
    })
  }

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Container>
        <Title level={3}>Регистрация</Title>

        <Form
          onFinish={onFinish}
          form={form}
          layout='vertical'
        >
          <Form.Item
            label='ФИО'
            name='fullName'
            rules={[
              {
                required: true,
                message: 'Введите ваше ФИО',
              },
            ]}
          >
            <Input />
          </Form.Item>
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
              Зарегистрироваться
            </Button>
          </Form.Item>
        </Form>
        <span style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Text>
            Уже есть аккаунт? <Link to={RoutesEnum.LOGIN}>Войти</Link>
          </Text>
        </span>
      </Container>
    </div>
  )
}
