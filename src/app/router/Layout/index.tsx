import { Layout } from 'antd'
import { PropsWithChildren } from 'react'
import { Navbar } from './navbar'

const {Header, Content} = Layout

export const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Layout style={{width: '100%', height: '100%'}}>
        <Header style={{width: '100%', height: '100px', borderBottom: '1px solid #7B92A4'}}>
          <Navbar />
        </Header>
        <Content style={{width: '100%', height: '100%'}}>
          <div>{children}</div>
        </Content>
      </Layout>
    </>
  )
}