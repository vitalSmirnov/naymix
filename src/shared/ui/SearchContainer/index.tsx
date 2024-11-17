import { PropsWithChildren, ReactNode, useState } from 'react'
import { Container } from '../Container'
import { Button, Input, Typography } from 'antd'
import SearchIcon from '../../assets/search.svg?react'

const { Title } = Typography

type SearchContainerProps = {
  title: string | ReactNode
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
    <Container color={color === 'green' ? '#0E6565' : '#F2542F'}>
      <Title
        level={3}
        style={{ color: 'white' }}
      >
        {title}
      </Title>
      <Input
        placeholder='Поиск'
        addonBefore={<SearchIcon />}
        style={{ margin: '1rem 0' }}
        value={searchString}
        onChange={e => handleSearch(e.currentTarget.value)}
      />
      <Button
        onClick={onClick}
        block
        style={{ backgroundColor: `${color === 'green' ? '#FE982D' : '#363636'}` }}
      >
        {buttonString}
      </Button>
      {children}
    </Container>
  )
}
