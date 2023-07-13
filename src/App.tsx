import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Button, Container, Grid } from '@material-ui/core'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  videoContainer: {
    position: 'relative',
    paddingBottom: '31.25%', // Mantener una relación de aspecto 16:9 (para videos de YouTube)
    paddingTop: '30px',
    height: 0,
    overflow: 'hidden',
  },
  videoIframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
}))

const App: React.FC = () => {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Container>
  )
}

export default App
