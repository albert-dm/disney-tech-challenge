import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PageHeader } from '../components/pageHeader'
import { PageFooter } from '../components/pageFooter';

import '../index.css';
import { NotFoundPage } from '../components/notFoundPage';

const queryClient = new QueryClient()

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundPage,
})

function RootComponent() {
  return (
    <>
      <PageHeader />
      <QueryClientProvider client={queryClient}>
        <main className='container m-auto my-4'>
          <Outlet />
        </main>
      </QueryClientProvider>
      <PageFooter />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
}
