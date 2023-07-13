import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router'

const App: React.FC = () => {
  return (
    <Container>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Container>
  )
}

export default App
