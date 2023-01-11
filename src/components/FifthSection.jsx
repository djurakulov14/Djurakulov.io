import React from 'react'
import { MyLink } from './_child/links/MyLink'
import { BsGithub, BsInstagram, BsTelegram } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

export const FifthSection = () => {
  return (
    <section className='sec sec5'>
        <h1>About me</h1>
        <p>I'm Sardor Djurakulov, 15 y.o, from Uzbekistan Samarkand, living in Samarkand, <br /> i'd be happy to take your offer.</p>

        <h1 className='ctc'>Contacts</h1>
        <p>Feel free to contact me wherever is comfortable for you.</p>
        <div className="links">
            <MyLink isHov={true} href="https://t.me/sard0r_js"><BsTelegram size={40}/></MyLink>
            <MyLink isHov={true} href="https://www.instagram.com/djuraku1ov"><BsInstagram size={40}/></MyLink>
            <MyLink isHov={true} href="https://github.com/djurakulov14"><BsGithub size={40}/></MyLink>
            <MyLink isHov={true} href="mailto:sarik.j2445@gmail.com"><HiOutlineMail size={40}/></MyLink>
        </div>
    </section>
  )
}
