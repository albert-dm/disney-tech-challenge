import { useQuery } from "@tanstack/react-query"
import { getAllCharacters } from "../../services/disney-api"
import { CharacterCard, CharacterCardSkeleton } from "../characterCard"

export function FeaturedCharacters() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['featuredCharacters'],
    queryFn: async () => {
      return await getAllCharacters({ page: 4, pageSize: 4 })
    }
  })

  const characters = data?.data ?? []

  return (
    <section className='flex pt-12 pb-24 px-16 flex-wrap gap-4 justify-center bg-primary min-h-96'>
      <h2 className='text-4xl text-white w-full text-center mb-6'>Featured Characters!</h2>
      {isLoading && Array.from({ length: 4 }).map((_, index) => <CharacterCardSkeleton/>)}
      {isError && <p className='text-white text-center w-full'>Something went wrong. Try again later.</p>}
      {!isLoading && !isError && characters.map((character) => (<CharacterCard key={character._id} character={character} />))}
    </section>
  )
}