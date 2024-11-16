import { AplllicantsWidget } from './Applicants'
import { TeamsWidget } from './Teams'

export const ProfileWidget = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(800px, repeat(2, 1fr))', gridTemplateRows: '100%' }}>
      <TeamsWidget />
      <AplllicantsWidget />
    </div>
  )
}
