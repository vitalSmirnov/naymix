import { useNavigate } from 'react-router-dom'
import { Teams } from '../../../entity/ui/Teams'
import { SearchContainer } from '../../../shared/ui/SearchContainer'
import { useState } from 'react'
import { RoutesEnum } from '../../../app/router/routes'

export const TeamsWidget = () => {
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState<string>('')
  const handleSearch = (value: string) => {
    setSearchValue(value)
  }
  const handleClick = () => {
    navigate(RoutesEnum.ADD_TEAM)
  }
  return (
    <SearchContainer
      onClick={handleClick}
      title='Команды'
      color='yellow'
      searchCallback={handleSearch}
      buttonString='Добавить новую команду'
    >
      <Teams searchString={searchValue} />
    </SearchContainer>
  )
}
