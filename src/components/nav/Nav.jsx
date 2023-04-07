import React from 'react'
import './nav.css'
import {HiOutlineHome} from 'react-icons/hi'
import {HiOutlineUser} from 'react-icons/hi'
import {BsBookmarkCheck} from 'react-icons/bs'
import {MdHomeRepairService} from 'react-icons/md'
import {TbMessage2} from 'react-icons/tb'



const Nav = () => {
  return (
   <nav>
    <a href="#"><HiOutlineHome /></a>
    <a href="#about"><HiOutlineUser /></a>
    <a href="#experience"><BsBookmarkCheck /></a>
    <a href="#services"><MdHomeRepairService /></a>
    <a href="#contact"><TbMessage2 /></a>

   </nav>
  )
}

export default Nav