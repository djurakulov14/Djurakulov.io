import React from 'react'
import { Skill } from './_child/MySkill.jsx/Skill'

export const FourthSection = () => {
  return (
    <section className='sec sec4'>
        <h1 className='title'>Skills</h1>
        <div className="skills">
            <Skill><h1>HTML5</h1></Skill>
            <Skill><h1>CSS3</h1></Skill>
            <Skill><h1>SASS/SCSS</h1></Skill>
            <Skill><h1>Tailwind</h1></Skill>
            <Skill><h1>Material UI</h1></Skill>
            <Skill><h1>Flowbite</h1></Skill>
            <Skill><h1>JavaScript</h1></Skill>
            <Skill><h1>React.js</h1></Skill>
            <Skill><h1>Redux.toolkit</h1></Skill>
            <Skill><h1>Next.js</h1></Skill>
            <Skill><h1>Typescript</h1></Skill>
            <Skill><h1>Axios</h1></Skill>
            <Skill><h1>Git/Github</h1></Skill>
            <Skill><h1>English</h1></Skill>
        </div>
    </section>
  )
}
