import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Menu } from './pages/menu'
import { Conteudo } from './pages/conteudo'

function App () {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Conteudo></Conteudo>
    </BrowserRouter>
  )
}

export default App
