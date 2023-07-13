import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './Pages/home'
import { LoginPage } from './Pages/login'
import { RouterLayout } from './common/RouterLayout'
import { PruebaPage } from './Pages/prueba'
export const AppRouter: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/prueba" element={<PruebaPage />} />
      </Route>
      <Route path="/home" element={<HomePage />} />
    </Routes>
  )
}
