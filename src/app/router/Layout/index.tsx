import { Layout } from 'antd'
import { PropsWithChildren } from 'react'
import { Navbar } from './navbar'

const { Header, Content } = Layout

export const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      <Header
        style={{
          width: '100%',
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
      <Content style={{ width: '100%', height: '100%' }}>
        <div>{children}</div>
      </Content>
    </Layout>
  )
}
