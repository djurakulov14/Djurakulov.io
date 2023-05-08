import React from 'react'
import { Skill } from './_child/MySkill.jsx/Skill';

export const SecondSection = () => {
  return (
    <section className='sec sec2'>
        <div className="left">
            <h1>Experience</h1>
            <div className="blocks">
                <div className="block">
                    <h2>Omega Premier Travel Service</h2>
                    <h2>Frontend Developer</h2>
                    <h3>February-2023 / Still</h3>
                </div>
            </div>
        </div>
        <div className="line"></div>
        <div className="right">
            <h1>Education</h1>
            <div className="blocks">
                <div className="block">
                    <h2>Now I'm studying at school</h2>
                </div>
                <div className="block">
                    <h2>I studied front-end at Wepro IT school</h2>
                    <h3>Score: 8.8/10</h3>
                    <div className="skills">
                        <Skill>HTML</Skill>
                        <Skill>CSS/SCSS</Skill>
                        <Skill>JS</Skill>
                        <Skill>Axios/http requests</Skill>
                        <Skill>React.js</Skill>
                        <Skill>Redux</Skill>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
