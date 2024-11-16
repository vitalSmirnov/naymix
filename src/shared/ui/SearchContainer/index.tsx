import { PropsWithChildren, useState } from 'react'
import { Container } from '../Container'
import { Button, Input, Typography } from 'antd'

const { Title } = Typography

type SearchContainerProps = {
  title: string
  color: 'green' | 'yellow'
  buttonString: string
  onClick: () => void
  searchCallback: (searchString: string) => void
} & PropsWithChildren

export const SearchContainer = ({
  title,
  color,
  buttonString,
  children,
  onClick,
  searchCallback,
}: SearchContainerProps) => {
  const [searchString, setSearchString] = useState<string>('')

  const handleSearch = (e: string) => {
    setSearchString(e)
    searchCallback(e)
  }

  return (
    <Container color={color === 'green' ? '#0E6565' : '#FF9928'}>
      <Title
        level={3}
        style={{ color: 'white' }}
      >
        {title}
      </Title>
      <Input
        value={searchString}
        onChange={e => handleSearch(e.currentTarget.value)}
      />
      <Button
        onClick={onClick}
        block
        style={{ backgroundColor: `${color === 'green' ? '#FE982D' : '#F2542F'}` }}
      >
        {buttonString}
      </Button>
      {children}
    </Container>
  )
}
