import { Flex, Spin } from 'antd'
import { Planets } from '../../entity/ui/UserPersonall/Planets'
import { Houses } from '../../entity/ui/UserPersonall/Houses'
import { Bio } from '../../entity/ui/UserPersonall/Bio'
import { MatchCompatibilities, MatchPersonal } from '../../entity/ui/UserPersonall/TeamMatch'
import { useGetMemberQuery } from '../../shared/api/querries/users/userQuery'
import { useParams } from 'react-router-dom'

type UserViewProps = {
  employee?: boolean
}

export const UserView = ({ employee }: UserViewProps) => {
  const { id } = useParams()
  const { data, isLoading } = useGetMemberQuery({ memberId: id! })

  if (isLoading) {
    return <Spin />
  }

  return (
    <div style={{ width: '100%', height: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
      {/* <Flex
        gap={'64px'}
        vertical
        style={{ width: '100%', height: '100%' }}
      > */}
      <Bio
        user={data?.member!}
        employee={employee}
      />
      <MatchCompatibilities
        title='Совместимость с командой'
        items={data?.member.astro.compatibility!}
      />
      <MatchPersonal
        title='Личные качества'
        items={data?.member.astro.personal_traits!}
      />
      {/* </Flex> */}
      {/* <Flex
        gap={'64px'}
        vertical
        style={{ width: '100%', height: '100%' }}
      >
        <Planets items={[]} />
        <Houses items={[]} />
      </Flex> */}
    </div>
  )
}
