import '../styles/components/technologiescontainer.sass'

import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact
} from 'react-icons/di'

const technologies = [
  {id: "html", name: "HTML5", icon: <DiHtml5/>, text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "},
  {id: "css3", name: "CSS3", icon: <DiCss3/>, text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "},
  
  
]

const Technologiescontainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
          {technologies.map((tech) => (
            <div className="technology-card" id={tech.id} key = {tech.id}>
              <svg>{tech.icon}</svg>
              <div className="technology-info">
                <h3>{tech.name}</h3>
                <p>{tech.text}</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}

export default Technologiescontainer