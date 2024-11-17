import { Table } from 'antd'

type TableAstroProps = {
  columns: any
  dataSource: any
}

export const TableAstro = ({ columns, dataSource }: TableAstroProps) => {
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
    />
  )
}
