import { createFileRoute, getRouteApi } from '@tanstack/react-router'
import { getAllCharacters } from '../services/disney-api'
import { CharacterCard } from '../components/characterCard'
import { FeaturedCharacters } from '../components/featuredCharacters'

export const Route = createFileRoute('/')({
  component: HomeComponent,
  loader: () => getAllCharacters()
})

function HomeComponent() {
  const routeApi = getRouteApi('/')
  const { data } = routeApi.useLoaderData()
  return (
    <>
      <section className='bg-background py-24 px-16 flex flex-wrap gap-4 justify-center'>
        {data.map((character) =>  <CharacterCard key={character._id} character={character} />)}
      </section>
      <FeaturedCharacters />
    </>
  )
}