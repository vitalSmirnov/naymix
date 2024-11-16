import { PropsWithChildren, useState } from 'react'
import { Container } from '../Container'
import { Button, Input } from 'antd'

type SearchContainerProps = {
  color: 'green' | 'yellow'
  buttonString: string
  onClick: () => void
  searchCallback: (searchString: string) => void
} & PropsWithChildren

export const SearchContainer = ({ color, buttonString, children, onClick, searchCallback }: SearchContainerProps) => {
  const [searchString, setSearchString] = useState<string>('')

  const handleSearch = (e: string) => {
    setSearchString(e)
    searchCallback(e)
  }

  return (
    <Container color={color === 'green' ? '#0E6565' : '#FF9928'}>
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
