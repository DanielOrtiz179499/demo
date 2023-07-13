import { Button, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'

import backgroundImage from '../../img/fondo.jpg' // Ruta de la imagen de fondo

// Estilos personalizados utilizando makeStyles
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: `url(${backgroundImage})`, // Imagen de fondo
    backgroundSize: 'cover', // Ajustar tamaño de la imagen de fondo
    fontFamily: 'Lucida Calligraphy, cursive', // Fuente personalizada "Lucida Calligraphy"
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  videoContainer: {
    position: 'relative',
    display: 'flex', // Centrar el contenido horizontalmente
    justifyContent: 'center', // Centrar el contenido horizontalmente
    alignItems: 'center', // Centrar el contenido verticalmente
    paddingBottom: '31.25%', // Mantener una relación de aspecto 16:9 (para videos de YouTube)
    paddingTop: '30px',
    height: 0,
    overflow: 'hidden',
  },
  videoIframe: {
    position: 'absolute',
    top: 0,
    left: '50%', // Centrar horizontalmente
    transform: 'translateX(-50%)', // Centrar horizontalmente
    width: '80%', // Ajustar el ancho del video según tus necesidades
    height: '100%',
  },
  button: {
    borderWidth: '1px',
    borderColor: 'black',
    borderRadius: '10px',
    padding: '10px 20px',
    fontFamily: 'Lucida Calligraphy, cursive', // Fuente personalizada "Lucida Calligraphy"
    fontSize: '22px',
    fontWeight: 'bold',
    textTransform: 'capitalize', // Convertir solo la primera letra en mayúscula
    width: '200px', // Ampliar el ancho del botón
    height: '50px',
  },
  title: {
    fontFamily: 'Lucida Calligraphy, cursive', // Fuente personalizada "Lucida Calligraphy"
    fontSize: '50px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
  },
}))

export const HomePage: React.FC<{}> = () => {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      {/* Contenedor principal de la página */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {/* Título de la página */}
          <Typography variant="h1" align="center" className={classes.title}>
            Titulo
          </Typography>
        </Grid>

        <Grid item xs={12}>
          {/* Contenedor del video */}
          <div className={classes.videoContainer}>
            {/* Video embebido */}
            <iframe
              className={classes.videoIframe}
              width="480" // Ajustar el ancho del video según tus necesidades
              height="270" // Ajustar el alto del video según tus necesidades
              src="https://www.youtube.com/embed/tbODmnYwwVA"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Grid>

        <Grid item xs={12} sm={12}>
          {/* Botón "Entrar" */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="outlined" className={classes.button}>
              {`Entrar`.charAt(0).toUpperCase() + `Entrar`.slice(1)}
            </Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}
