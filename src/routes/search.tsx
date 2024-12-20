import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod';

export const Route = createFileRoute('/search')({
  component: SearchResults,
  errorComponent: NoSearchQuery,
  validateSearch: z.object({
    query: z.string().nonempty(),
  }),
})

function SearchResults() {
  const { query } = Route.useSearch()
  return (
    <div className="p-2">
      <h3>Search Results for {query}</h3>
    </div>
  )
}

function NoSearchQuery() {
  return (
    <div className="p-2">
      <h3>No search query provided</h3>
    </div>
  )
}
