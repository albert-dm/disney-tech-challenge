import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <header>
        <div>Logo</div>
        <input type="text" placeholder="Search" />
        <div>Avatar</div>
      </header>
      <Outlet />
      <footer>Disney</footer>
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
}
