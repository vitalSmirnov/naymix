import { Flex } from 'antd'
import { Planets } from '../../entity/ui/UserPersonall/Planets'
import { Houses } from '../../entity/ui/UserPersonall/Houses'
import { Bio } from '../../entity/ui/UserPersonall/Bio'
import { Match } from '../../entity/ui/UserPersonall/TeamMatch'

type UserViewProps = {
  employee?: boolean
}

export const UserView = ({ employee }: UserViewProps) => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
      <Flex
        gap={'64px'}
        vertical
        style={{ width: '100%', height: '100%' }}
      >
        <Bio
          user={}
          employee={employee}
        />
        <Match
          title='Совместимость с командой'
          items={[]}
        />
        <Match
          title='Личные качества'
          items={[]}
        />
      </Flex>
      <Flex
        gap={'64px'}
        vertical
        style={{ width: '100%', height: '100%' }}
      >
        <Planets items={[]} />
        <Houses items={[]} />
      </Flex>
    </div>
  )
}
