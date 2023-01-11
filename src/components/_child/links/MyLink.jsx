import React from 'react'
import cl from './MyLink.module.scss'

export const MyLink = (props) => {
  return (
    <a className={props.isHov ? cl.MyLink : cl.ishov} {...props} >{props.children}</a>
  )
}
