import { ThemeConfig } from 'antd'

export const getTheme = (): ThemeConfig => {
  return {
    token: {
      borderRadius: 12,
      colorPrimary: '#0E6565',
      colorText: '#131313',
    },
    components: {
      Select: {
        colorText: '##131313',
      },
      Input: {
        colorBorder: '#DAE5EE',
        borderRadius: 8,
      },
      Button: {
        borderRadius: 28,
        primaryShadow: 'transparent',
      },
    },
  }
}
