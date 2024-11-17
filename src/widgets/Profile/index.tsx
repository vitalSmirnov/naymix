import { AplllicantsWidget } from './Applicants'
import { TeamsWidget } from './Teams'

export const ProfileWidget = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '100%', gap: '2rem' }}>
      <TeamsWidget />
      <AplllicantsWidget />
    </div>
  )
}
