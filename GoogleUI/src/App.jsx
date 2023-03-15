import { Header } from "./components/Header"
import { LogoGoogle } from "./components/LogoGoogle"

import SeachIcon from './imagens/Search.svg'
import KeyboardIcon from './imagens/Keyboard.png'
import VoiceIcon from './imagens/Voice.svg'
import CameraIcon from './imagens/camera.svg'

function App() {

  return (
   <div>
    <Header />
    <LogoGoogle />
    <img src={SeachIcon} alt="" />
    <img src={KeyboardIcon} alt="" />
    <img src={VoiceIcon} alt="" />
    <img src={CameraIcon} alt="" />
   </div>
  )
}

export default App
