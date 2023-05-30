import React from 'react'
import "./Nav.css"
import {AiOutlineHome,AiOutlineUser} from "react-icons/ai"
import {RiServiceLine} from "react-icons/ri"
import {BiMessageDetail} from "react-icons/bi"
import { useState } from 'react'

import {BiBook} from "react-icons/bi"


function Nav() {
  const [activeNav,setActiveNav]=useState("#")
  return (
    <nav>
      <a onClick={()=> setActiveNav("#")} className={activeNav ==="#" ? 'active' : ''} href="#"><AiOutlineHome/></a>
      <a onClick={()=> setActiveNav("about")} className={activeNav ==="about" ? 'active' : ''} href="#about"><AiOutlineUser/></a>
      <a onClick={()=> setActiveNav("experience")} className={activeNav ==="experience" ? 'active' : ''} href="#experience"><BiBook/></a>
      <a onClick={()=> setActiveNav("services")} className={activeNav ==="services" ? 'active' : ''} href="#services"><RiServiceLine/></a>
      <a href="#contact"><BiMessageDetail/></a>
    </nav>
  )
}

export default Nav