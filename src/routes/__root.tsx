import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { PageHeader } from '../components/pageHeader'

import '../index.css';
import { PageFooter } from '../components/pageFooter';

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <PageHeader />
      <main className='container m-auto my-4'>
        <Outlet />
      </main>
      <PageFooter />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
}
