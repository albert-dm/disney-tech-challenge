import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { PageHeader } from '../components/pageHeader'

import '../index.css';

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <PageHeader />
      <main className='container m-auto'>
        <Outlet />
      </main>
      <footer className='container m-auto'>Disney</footer>
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
}
