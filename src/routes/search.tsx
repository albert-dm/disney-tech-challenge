import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod';
import { FeaturedCharacters } from '../components/featuredCharacters';
import { CharacterCard } from '../components/characterCard';
import { filterCharacter } from '../services/disney-api';

export const Route = createFileRoute('/search')({
  component: SearchResults,
  errorComponent: NoSearchQuery,
  validateSearch: z.object({
    query: z.string().nonempty(),
  }),
})

function SearchResults() {
  const { query } = Route.useSearch()
  const { data, isLoading, isError } = useQuery({
    queryKey: ['searchResults', query],
    queryFn: async () => {
      return await filterCharacter(query)
    }
  })

  const characters = data?.data ?? []

  return (<>
        <section className='bg-background py-24 px-16 flex flex-wrap gap-4 justify-center'>
          <h2 className='text-4xl w-full text-center mb-6'>Search Results - {query}</h2>
          {isLoading && Array.from({ length: 2 }).map((_, index) => <CharacterCard.Skeleton key={index}/>)}
          {isError && <p className='text-2xl text-center w-full'>Something went wrong. Try again later.</p>}
          {!isLoading && !isError && characters.map((character) => (<CharacterCard key={character._id} character={character} />))}
          {!isLoading && !isError && characters.length === 0 && <p className='text-2xl text-center w-full'>No character found.</p>}
        </section>
        <FeaturedCharacters />
      </>
  )
}

function NoSearchQuery() {
  return (
    <div className="p-2">
      <h3>No search query provided</h3>
    </div>
  )
}
