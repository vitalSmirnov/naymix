export type PersonalTraits = {
  leadership: number
  stress_resilience: number
  communication: number
  responsibility: number
  ambition: number
}

export type CompatibilityTraits = {
  emotional_compatibility: number
  intellectual_compatibility: number
  goals_compatibility: number
  problem_solving_compatibility: number
  decision_making_compatibility: number
}

export type AstroType = {
  personal_traits: PersonalTraits
  compatibility: CompatibilityTraits
}
