import Logo from '../imagens/logo.jpg'

import './Header.css'

export function Header(){
  return(
    <header className='cabecalho'>
      <a href='#' >Gmail</a>
      <a href='#' >Imagens</a>
      <a href='#' ><p>#</p></a>
      <img src={Logo} alt="Logo" />
    </header>
  )
}