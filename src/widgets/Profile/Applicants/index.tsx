import { useNavigate } from 'react-router-dom'
import { SearchContainer } from '../../../shared/ui/SearchContainer'
import { useState } from 'react'
import { RoutesEnum } from '../../../app/router/routes'
import { Applicants } from '../../../entity/ui/Applicants'

export const AplllicantsWidget = () => {
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState<string>('')
  const handleSearch = (value: string) => {
    setSearchValue(value)
  }
  const handleClick = () => {
    navigate(RoutesEnum.ADD_APPLICANT)
  }
  return (
    <SearchContainer
      onClick={handleClick}
      title='Соискатели'
      color='yellow'
      searchCallback={handleSearch}
      buttonString='Добавить нового соискателя'
    >
      <Applicants searchString={searchValue} />
    </SearchContainer>
  )
}
