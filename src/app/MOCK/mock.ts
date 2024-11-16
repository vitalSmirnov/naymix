import { TeamShortType } from '../../entity/types/team/team'
import { UserType } from '../../entity/types/users/employee'

export const users: UserType[] = [
  {
    id: '1',
    full_name: 'Ivan Ivanov',
    birth_date: '1990-01-15',
    birth_place: { name: 'Moscow', latitude: 55.7558, longitude: 37.6173 },
    email: 'ivan.ivanov@example.com',
    phone: '+79210000000',
    status: 'active',
    team: { id: 'team1', name: 'Development', description: 'Frontend and Backend Development Team' },
    position: 'Frontend Developer',
    astro: {
      personal_traits: {
        leadership: 7,
        stress_resilience: 8,
        communication: 6,
        responsibility: 9,
        ambition: 8,
      },
      compatibility: {
        emotional_compatibility: 8,
        intellectual_compatibility: 9,
        goals_compatibility: 7,
        problem_solving_compatibility: 6,
        decision_making_compatibility: 7,
      },
    },
  },
  {
    id: '2',
    full_name: 'Anna Smirnova',
    birth_date: '1992-06-05',
    birth_place: { name: 'Saint Petersburg', latitude: 59.9343, longitude: 30.3351 },
    email: 'anna.smirnova@example.com',
    phone: '+79210000001',
    status: 'inactive',
    team: { id: 'team2', name: 'Marketing', description: 'Marketing and Advertising Team' },
    position: 'Marketing Specialist',
    astro: {
      personal_traits: {
        leadership: 6,
        stress_resilience: 7,
        communication: 9,
        responsibility: 8,
        ambition: 7,
      },
      compatibility: {
        emotional_compatibility: 9,
        intellectual_compatibility: 8,
        goals_compatibility: 7,
        problem_solving_compatibility: 6,
        decision_making_compatibility: 8,
      },
    },
  },
  {
    id: '3',
    full_name: 'John Doe',
    birth_date: '1985-03-10',
    birth_place: { name: 'New York', latitude: 40.7128, longitude: -74.006 },
    email: 'john.doe@example.com',
    phone: '+19210000002',
    status: 'active',
    team: { id: 'team3', name: 'Sales', description: 'International Sales Team' },
    position: 'Sales Manager',
    astro: {
      personal_traits: {
        leadership: 8,
        stress_resilience: 7,
        communication: 8,
        responsibility: 9,
        ambition: 6,
      },
      compatibility: {
        emotional_compatibility: 7,
        intellectual_compatibility: 9,
        goals_compatibility: 8,
        problem_solving_compatibility: 7,
        decision_making_compatibility: 9,
      },
    },
  },
  {
    id: '4',
    full_name: 'Maria Petrova',
    birth_date: '1995-12-25',
    birth_place: { name: 'Kazan', latitude: 55.8304, longitude: 49.0661 },
    email: 'maria.petrova@example.com',
    phone: '+79210000003',
    status: 'active',
    team: { id: 'team4', name: 'HR', description: 'Human Resources Department' },
    position: 'HR Specialist',
    astro: {
      personal_traits: {
        leadership: 7,
        stress_resilience: 8,
        communication: 9,
        responsibility: 9,
        ambition: 6,
      },
      compatibility: {
        emotional_compatibility: 8,
        intellectual_compatibility: 7,
        goals_compatibility: 9,
        problem_solving_compatibility: 6,
        decision_making_compatibility: 8,
      },
    },
  },
  {
    id: '5',
    full_name: 'James Smith',
    birth_date: '1988-08-14',
    birth_place: { name: 'London', latitude: 51.5074, longitude: -0.1278 },
    email: 'james.smith@example.com',
    phone: '+44210000004',
    status: 'active',
    team: { id: 'team5', name: 'Operations', description: 'Operations and Logistics Team' },
    position: 'Operations Manager',
    astro: {
      personal_traits: {
        leadership: 9,
        stress_resilience: 8,
        communication: 7,
        responsibility: 9,
        ambition: 8,
      },
      compatibility: {
        emotional_compatibility: 9,
        intellectual_compatibility: 8,
        goals_compatibility: 7,
        problem_solving_compatibility: 9,
        decision_making_compatibility: 8,
      },
    },
  },
]

export const teams: TeamShortType[] = [
  {
    id: 'team1',
    name: 'Development',
    description: 'Frontend and Backend Development Team',
  },
  {
    id: 'team2',
    name: 'Marketing',
    description: 'Marketing and Advertising Team',
  },
  {
    id: 'team3',
    name: 'Sales',
    description: 'International Sales Team',
  },
  {
    id: 'team4',
    name: 'HR',
    description: 'Human Resources Department',
  },
  {
    id: 'team5',
    name: 'Operations',
    description: 'Operations and Logistics Team',
  },
]
