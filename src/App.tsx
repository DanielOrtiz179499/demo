import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Button, Container, Grid } from '@material-ui/core'
import { BrowserRouter, Link } from 'react-router-dom'
import { NavBar } from './common/NavBar'
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
      <Grid container spacing={2}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>

        <Grid item xs={12} sm={12}>
          <div>
            <Button fullWidth variant="contained">
              Pagina inicial
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6}>
          <img src="/img/1.png" alt="Imagen 1" className={classes.image} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src="/img/2.png" alt="Imagen 2" className={classes.image} />
        </Grid>

        <Grid item xs={12}>
          <div className={classes.videoContainer}>
            <iframe
              className={classes.videoIframe}
              width="480" // Ajustar el ancho del video según tus necesidades
              height="270" // Ajustar el alto del video según tus necesidades
              src="https://www.youtube.com/embed/eTGu0CZs0r0"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
