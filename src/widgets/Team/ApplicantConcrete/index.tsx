import { useNavigate } from 'react-router-dom'
import { SearchContainer } from '../../../shared/ui/SearchContainer'
import { useState } from 'react'
import { RoutesEnum } from '../../../app/router/routes'
import { ApplicantCollapse } from '../../../entity/ui/Applicants/ApplicationCollapse'
import { MemberType } from '../../../entity/types/users/employee'

type Props = {
  data: MemberType[]
}

export const ApplicantConcreteWidget = ({ data }: Props) => {
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
      color='green'
      searchCallback={handleSearch}
      buttonString='Добавить нового соискателя'
    >
      <ApplicantCollapse
        data={data}
        searchString={searchValue}
      />
    </SearchContainer>
  )
}
