import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { MyLink } from './_child/links/MyLink'
import { Skill } from './_child/MySkill.jsx/Skill'

export const ThirdSection = () => {
  return (
    <section className='sec sec3'>
        <h1 className='title'>Portfolio Projects</h1>
        <div className="items">
            <div className="item">
                <div className="top">
                    <h1>spotify-js</h1>
                    <h3>I created clone of spotify with JS</h3>
                    <MyLink href="https://github.com/djurakulov14/spotify-js.git"><BsGithub size={40}/></MyLink>
                    <div className="skills">
                        <Skill>JS</Skill>
                        <Skill>Gulp/scss</Skill>
                        <Skill>Axios</Skill>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="top">
                    <h1>m.video</h1>
                    <h3>I created clone of m.video with JS</h3>
                    <MyLink href="https://github.com/djurakulov14/mvideo.git"><BsGithub size={40}/></MyLink>
                    <div className="skills">
                        <Skill>JS</Skill>
                        <Skill>Gulp/scss</Skill>
                        <Skill>Axios</Skill>
                        <Skill>Swiper.js</Skill>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="top">
                    <h1>spotify-react</h1>
                    <h3>I created clone of spotify with React.js</h3>
                    <MyLink href="https://github.com/djurakulov14/spotify-react.git"><BsGithub size={40}/></MyLink>
                    <div className="skills">
                        <Skill>React.js</Skill>
                        <Skill>Tailwind</Skill>
                        <Skill>Axios</Skill>
                        <Skill>Spotify Dashboard</Skill>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="top">
                    <h1>todo-react</h1>
                    <h3>I created todo with React.js</h3>
                    <MyLink href="https://github.com/djurakulov14/todo-react.git"><BsGithub size={40}/></MyLink>
                    <div className="skills">
                        <Skill>React.js</Skill>
                        <Skill>Scss</Skill>
                        <Skill>Styled components</Skill>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="top">
                    <h1>OPTS-website</h1>
                    <h3>Website for Omega Premier Travel Service</h3>
                    <div className="linkss">
                        <MyLink href="https://github.com/djurakulov14/OPTS-Travel.git"><BsGithub size={40}/></MyLink>
                        <MyLink href="https://opts.tours"><img src='https://cdn-icons-png.flaticon.com/512/493/493805.png'/></MyLink>
                    </div>
                    <div className="skills">
                        <Skill>Next.js</Skill>
                        <Skill>TailwindCSS</Skill>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
