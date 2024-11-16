import { useNavigate } from 'react-router-dom'
import { SearchContainer } from '../../../shared/ui/SearchContainer'
import { useState } from 'react'
import { RoutesEnum } from '../../../app/router/routes'
import { EmployeeCollapse } from '../../../entity/ui/Employee'

export const EmployeeWidget = () => {
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState<string>('')
  const handleSearch = (value: string) => {
    setSearchValue(value)
  }
  const handleClick = () => {
    navigate(RoutesEnum.ADD_EMPLOYEE)
  }
  return (
    <SearchContainer
      onClick={handleClick}
      title='Сотрудники'
      color='green'
      searchCallback={handleSearch}
      buttonString='Добавить сотрудника'
    >
      <EmployeeCollapse searchString={searchValue} />
    </SearchContainer>
  )
}
