import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './Pages/home'
import { LoginPage } from './Pages/login'
import { RouterLayout } from './common/RouterLayout'
export const AppRouter: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  )
}
