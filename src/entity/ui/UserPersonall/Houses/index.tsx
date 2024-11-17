import { Container } from '../../../../shared/ui/Container'
import { TableAstro } from '../../../../shared/ui/Table'
import { HousesType } from '../../../types/rawAstro/rewAstro'

type HousesProps = {
  items: HousesType[]
}

const columns = [
  {
    title: 'Дома',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Знак',
    dataIndex: 'sign',
    key: 'sign',
  },
]

const houseComparer = (items: HousesType[]) => {
  return items.map((item, key) => {
    return {
      key: key,
      name: item.name,
      sign: item.sign,
    }
  })
}

export const Houses = ({ items }: HousesProps) => {
  return (
    <Container color='#0E6565'>
      <TableAstro
        columns={columns}
        dataSource={houseComparer(items)}
      />
    </Container>
  )
}
