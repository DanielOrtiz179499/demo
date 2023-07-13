import { Button, Container, Grid } from '@material-ui/core'
import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import background from '../login/fondo.png'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed', // Hacer la imagen de fondo responsive
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  videoContainer: {
    position: 'relative',
    paddingBottom: '31.25%',
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

export const LoginPage: React.FC<{}> = () => {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      <Grid container spacing={2}>
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
              src="https://www.youtube.com/embed/z5fZYj6VC5o"
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
