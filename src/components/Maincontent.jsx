import "../styles/components/maincontent.sass"
import Aboutcontainer from "./Aboutcontainer"
import Navegation from "./Navegation"
import Projectscontainer from "./Projectscontainer"
import Repositoriesgit from "./Repositoriesgit"
import Technologiescontainer from "./Technologiescontainer"

const Maincontent = () => {
  return (
    <main id="main-content">
      <Navegation/>

      
      <Aboutcontainer/>
      <Repositoriesgit/>
      <Technologiescontainer/>
      <Projectscontainer/>
    </main>
  )
}

export default Maincontent