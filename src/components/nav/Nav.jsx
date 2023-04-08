import React from 'react'
import './nav.css'
import {HiOutlineHome} from 'react-icons/hi'
import {HiOutlineUser} from 'react-icons/hi'
import {BsBookmarkCheck} from 'react-icons/bs'
import {MdHomeRepairService} from 'react-icons/md'
import {TbMessage2} from 'react-icons/tb'
import { useState } from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
   <nav>
    <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><HiOutlineHome /></a>
    <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><HiOutlineUser /></a>
    <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsBookmarkCheck /></a>
    <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdHomeRepairService /></a>
    <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TbMessage2 /></a>

   </nav>
  )
}

export default Nav