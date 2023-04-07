import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'






const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://twitter.com/yusfate4" target="_blank"  rel="noopener noreferrer"><AiFillTwitterCircle /></a>
        <a href="https://linkedin.com/yusfate4" target="_blank"  rel="noopener noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/yusfate4" target="_blank"  rel="noopener noreferrer"><FaGithub /></a>

    
    </div>
  )
}

export default HeaderSocials