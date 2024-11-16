import React, { PropsWithChildren } from 'react'

export const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return <div style={{ padding: '64px', borderRadius: '28px', placeContent: 'center' }}>{children}</div>
}
