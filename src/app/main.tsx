import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { Provider } from 'react-redux'
import { store } from '../shared/api/store/store'
import { AppRoutes } from './router'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ConfigProvider>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </ConfigProvider>
  </BrowserRouter>
)
