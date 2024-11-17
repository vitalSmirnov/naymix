import { Flex, Progress, Typography } from 'antd'
import { Container } from '../../../../shared/ui/Container'
import { CompatibilityTraits, PersonalTraits } from '../../../types/astro/astro'

type MatchProps = {
  title: string
  items: PersonalTraits
}
type MatchCompProps = {
  title: string
  items: CompatibilityTraits
}
const { Title, Text } = Typography

export const MatchCompatibilities = ({
  title,
  items: {
    emotional_compatibility,
    intellectual_compatibility,
    decision_making_compatibility,
    problem_solving_compatibility,
    goals_compatibility,
  },
}: MatchCompProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Flex
        vertical
        gap={'24px'}
      >
        <Flex
          gap={'8px'}
          vertical
        >
          <Text>{`Эмоциональная совместимость:`}</Text>
          <Progress
            percent={emotional_compatibility}
            percentPosition={{ align: 'end', type: 'outer' }}
          />
        </Flex>
        <Flex
          gap={'8px'}
          vertical
        >
          <Text>{`Интеллектуальная совместимость:`}</Text>
          <Progress
            percent={intellectual_compatibility}
            percentPosition={{ align: 'end', type: 'outer' }}
          />
        </Flex>
        <Flex
          gap={'8px'}
          vertical
        >
          <Text>{`Совместимость в принятии решений:`}</Text>
          <Progress
            percent={decision_making_compatibility}
            percentPosition={{ align: 'end', type: 'outer' }}
          />
        </Flex>
        <Flex
          gap={'8px'}
          vertical
        >
          <Text>{`Совместимость в решении проблем:`}</Text>
          <Progress
            percent={problem_solving_compatibility}
            percentPosition={{ align: 'end', type: 'outer' }}
          />
        </Flex>
        <Flex
          gap={'8px'}
          vertical
        >
          <Text>{`Совместимость в целях:`}</Text>
          <Progress
            percent={goals_compatibility}
            percentPosition={{ align: 'end', type: 'outer' }}
          />
        </Flex>
      </Flex>
    </Container>
  )
}

export const MatchPersonal = ({
  title,
  items: { leadership, ambition, responsibility, stress_resilience, communication },
}: MatchProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Flex
        vertical
        gap={'24px'}
      >
        <Flex
          gap={'8px'}
          vertical
        >
          <Text>{`Лидерство:`}</Text>
          <Progress
            percent={leadership}
            percentPosition={{ align: 'end', type: 'outer' }}
          />
        </Flex>
        <Flex
          gap={'8px'}
          vertical
        >
          <Text>{`Амбиции:`}</Text>
          <Progress
            percent={ambition}
            percentPosition={{ align: 'end', type: 'outer' }}
          />
        </Flex>
        <Flex
          gap={'8px'}
          vertical
        >
          <Text>{`Ответственность:`}</Text>
          <Progress
            percent={responsibility}
            percentPosition={{ align: 'end', type: 'outer' }}
          />
        </Flex>
        <Flex
          gap={'8px'}
          vertical
        >
          <Text>{`Строссоустойчивость:`}</Text>
          <Progress
            percent={stress_resilience}
            percentPosition={{ align: 'end', type: 'outer' }}
          />
        </Flex>
        <Flex
          gap={'8px'}
          vertical
        >
          <Text>{`Коммуникабельность:`}</Text>
          <Progress
            percent={communication}
            percentPosition={{ align: 'end', type: 'outer' }}
          />
        </Flex>
      </Flex>
    </Container>
  )
}
