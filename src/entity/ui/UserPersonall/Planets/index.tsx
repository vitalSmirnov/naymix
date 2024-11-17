import { Container } from '../../../../shared/ui/Container'
import { TableAstro } from '../../../../shared/ui/Table'
import { PlanetsType } from '../../../types/rawAstro/rewAstro'

type PlanetsProps = {
  items: PlanetsType[]
}

const columns = [
  {
    title: 'Планеты',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Знак',
    dataIndex: 'sign',
    key: 'sign',
  },
  {
    title: 'Позиция дома',
    dataIndex: 'sign',
    key: 'sign',
  },
]

const houseComparer = (items: PlanetsType[]) => {
  return items.map((item, key) => {
    return {
      key: key,
      name: item.name,
      sign: item.sign,
      house: item.house,
    }
  })
}

export const Planets = ({ items }: PlanetsProps) => {
  return (
    <Container color='#0E6565'>
      <TableAstro
        columns={columns}
        dataSource={houseComparer(items)}
      />
    </Container>
  )
}
