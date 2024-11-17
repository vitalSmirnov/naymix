import { useNavigate } from 'react-router-dom'
import { Teams } from '../../../entity/ui/Teams'
import { SearchContainer } from '../../../shared/ui/SearchContainer'
import { useState } from 'react'
import { RoutesEnum } from '../../../app/router/routes'
import TeamsIcon from '../../../shared/assets/teams.svg?react'

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
      title={
        <>
          Команды{' '}
          <TeamsIcon
            height={'40px'}
            width={'40px'}
          />
        </>
      }
      color='green'
      searchCallback={handleSearch}
      buttonString='Добавить новую команду'
    >
      <Teams searchString={searchValue} />
    </SearchContainer>
  )
}
