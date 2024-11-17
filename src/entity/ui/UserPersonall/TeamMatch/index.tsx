import { Flex, Progress, Typography } from 'antd'
import { Container } from '../../../../shared/ui/Container'
import { CompatibilityEnum } from '../../../enums/compatibility'

type ProgressItem = {
  name: string
  progress: number
}

type MatchProps = {
  title: string
  items: ProgressItem[]
}
const { Title, Text } = Typography

const nameComparer = (e: string) => {
  // @ts-ignore
  return CompatibilityEnum[e]
}

export const Match = ({ title, items }: MatchProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Flex
        vertical
        gap={'24px'}
      >
        {items.map((item, key) => {
          return (
            <Flex
              key={key}
              gap={'8px'}
              vertical
            >
              <Text>{`${nameComparer(item.name)}}:`}</Text>
              <Progress
                percent={item.progress}
                percentPosition={{ align: 'end', type: 'outer' }}
              />
            </Flex>
          )
        })}
      </Flex>
    </Container>
  )
}
