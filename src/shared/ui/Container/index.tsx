import React, { PropsWithChildren } from 'react'

type ContainerProps = {
  color?: string
}

export const Container: React.FC<PropsWithChildren & ContainerProps> = ({ children, color = 'white' }) => {
  return (
    <div
      style={{
        padding: '64px',
        borderRadius: '28px',
        placeContent: 'center',
        backgroundColor: `${color}`,
        width: '800px',
      }}
    >
      {children}
    </div>
  )
}
