import { Layout } from 'antd'
import { RegisterWidget } from '../../widgets/Registration'
import { Navbar } from '../../app/router/Layout/navbar'

const { Content, Header } = Layout

const RegistrationPage = () => {
  document.title = 'Регистрация'
  return (
    <Layout style={{ width: '100%', height: '100dvh', backgroundColor: '#0E6565' }}>
      <Header
        style={{
          width: '100%',
          backgroundColor: 'white',
          height: '100px',
          borderBottom: '1px solid #7B92A4',
          padding: '10px 56px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Navbar />
      </Header>
      <Content>
        <RegisterWidget />
      </Content>
    </Layout>
  )
}

export default RegistrationPage
