import React from "react"
import SkillData from "../../../../content/skills.json"
import Fade from "react-reveal/Fade"
import '../layout.scss'

const Skills = () => {
  return (
    <section className="section skill">
      <Fade>
        <div className="section__title">
          <h4>skills</h4>
        </div>
        <div className="section__content">
          <div className="skills">
            <div className="skills__type">
              <div className="skills__type--header">languages</div>
              <ul>
                {SkillData.languages.map((data, index) => {
                  return <li className="skills__type--item" key={`${index}`}><p>{data.item}</p></li>
                })}
              </ul>
            </div>
            <div className="skills__type">
              <div className="skills__type--header">frameworks</div>
              <ul>
                {SkillData.frameworks.map((data, index) => {
                  return <li className="skills__type--item" key={`${index}`}><p>{data.item}</p></li>
                })}
              </ul>
            </div>
            <div className="skills__type">
              <div className="skills__type--header">tools</div>
              <ul>
                {SkillData.tools.map((data, index) => {
                  return <li className="skills__type--item" key={`${index}`}><p>{data.item}</p></li>
                })}
              </ul>
            </div>
            <div className="skills__type">
              <div className="skills__type--header">design</div>
              <ul>
                {SkillData.design.map((data, index) => {
                  return <li className="skills__type--item" key={`${index}`}><p>{data.item}</p></li>
                })}
              </ul>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  )
}

export default Skills
