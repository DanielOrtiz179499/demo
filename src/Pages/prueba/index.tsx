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

export const PruebaPage: React.FC<{}> = () => {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      <Grid item xs={12} sm={12}>
        <div>
          <Button fullWidth variant="contained">
            Prueba
          </Button>
        </div>
      </Grid>
    </Container>
  )
}
