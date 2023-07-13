import React from 'react'
//import { NavBar } from './NavBar'
//<NavBar /> si se va a utilizar ponerlo al lado de Outlet
import { Outlet } from 'react-router-dom'

export const RouterLayout: React.FC<{}> = () => {
  return (
    <>
      <Outlet />
    </>
  )
}
