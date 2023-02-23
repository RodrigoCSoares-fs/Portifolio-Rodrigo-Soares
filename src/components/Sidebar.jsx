import Socialnetworks from './Socialnetworks'

import Avatar from '../img/avatarA.jpg'

import '../styles/components/sidebar.sass'
import Informationcontainer from './Informationcontainer'



const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Rodrigo Soares Imagem" />
      <p className="title">Desenvolvedor</p>
      <Socialnetworks/>
      <Informationcontainer/>
      <a href="" className="btnc">Download currículo</a>
    </aside>
  )
}

export default Sidebar