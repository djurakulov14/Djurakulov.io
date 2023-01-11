import React from 'react'
import cl from './Skill.module.scss'

export const Skill = (props) => {
  return (
    <div className={cl.Skill} {...props} >{props.children}</div>
  )
}
