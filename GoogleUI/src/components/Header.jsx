import Logo from '../imagens/logo.jpg'

import './Header.css'

export function Header(){
  return(
    <header className='cabecalho'>
      <p>Gmail</p>
      <p>Imagens</p>
      <p>#</p>
      <img src={Logo} alt="Logo" />
    </header>
  )
}