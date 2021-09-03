import { Switch, Route } from 'react-router-dom'
import ExemploClasse from '../../compoent/exemploClasse'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  }
}))

export const Conteudo = () => {
  const classes = useStyles()
  return (
    <Container maxWidth='sm' className={classes.content}>
      <Switch>
        <Route path='/' exact>
          <ExemploClasse />
        </Route>
      </Switch>
    </Container>
  )
}
