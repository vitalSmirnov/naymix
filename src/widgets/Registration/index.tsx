import { Button, Form, Input, Select, Typography } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { Container } from '../../shared/ui/Container'
import { Link } from 'react-router-dom'
import { Option } from 'antd/es/mentions'
import { RegisterCredentials } from '../../entity/types/credentials/registerCredentials'

const { Title, Text } = Typography

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

export const RegisterWidget = () => {
  const [form] = useForm()

  const onFinish = (values: RegisterCredentials) => {
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
            name='username'
            label='ФИО'
            rules={[{ required: true, message: 'Введите своё ФИО!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='phone'
            label='Телефон'
            rules={[{ required: true, message: 'Введите номер телефона!' }]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{ width: '100%' }}
            />
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
        <span style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Text>
            Уже есть аккаунт? <Link to='/register'>Войти</Link>
          </Text>
        </span>
      </Container>
    </div>
  )
}
