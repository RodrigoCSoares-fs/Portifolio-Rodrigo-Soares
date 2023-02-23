import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from "react-icons/ai";
import '../styles/components/informationcontainer.sass'

const Informationcontainer = () => {
  return (
    <section id="information-container">
      <div className="infocard">
        <AiFillPhone id="phone-icon"/>
        <div>
          <h3>Contato</h3>
          <p>(88) 9 9842 - 7392</p>
        </div>
      </div>

      <div className="infocard">
        <AiOutlineMail id="email-icon"/>
        <div>
          <h3>Email</h3>
          <p>rodrigo.soares0642@gmail.com</p>
        </div>
      </div>

      <div className="infocard">
        <AiFillEnvironment id="pin-icon"/>
        <div>
          <h3>Localização</h3>
          <p>Iguatu-CE</p>
        </div>
      </div>
    </section>
  )
}

export default Informationcontainer