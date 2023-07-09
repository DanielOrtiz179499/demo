import { Button, Container, Grid } from '@material-ui/core'
import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'

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

export const LoginPage: React.FC<{}> = () => {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      <Grid item xs={12} sm={12}>
        <div>
          <Button fullWidth variant="contained">
            Pagina3
          </Button>
        </div>
      </Grid>
    </Container>
  )
}
