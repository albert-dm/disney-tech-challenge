import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/character/$character')({
  component: CharacterComponent,
})

function CharacterComponent() {
  const { character } = Route.useParams()
  return (
    <div className="p-2">
      <h3>Character: {character}</h3>
    </div>
  )
}
