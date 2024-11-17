import { Layout, Spin } from 'antd'
import { Suspense } from 'react'
import { Navbar } from './navbar'
import { Outlet } from 'react-router-dom'

const { Header, Content } = Layout

export const DefaultLayout = () => {
  return (
    <Layout style={{ width: '100%', height: '100vh', overflow: 'hidden', backgroundColor: 'rgb(240, 246, 250);' }}>
      <Header
        style={{
          width: '100%',
          height: '100px',
          borderBottom: '1px solid #7B92A4',
          padding: '10px 56px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'white',
        }}
      >
        <Navbar />
      </Header>
      <Content
        style={{
          width: '100%',
          height: '100%',
          padding: '2rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgb(240, 246, 250)',
        }}
      >
        <Suspense fallback={<Spin />}>
          <Outlet />
        </Suspense>
      </Content>
    </Layout>
  )
}
