import React from 'react'
import {BsTwitter, BsInstagram, BsLinkedin, BsTiktok, BsWhatsapp} from "react-icons/bs"
import {FaFacebookF} from "react-icons/fa"
import { Link } from 'react-router-dom'
const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href="https://www.linkedin.com/in/olotudavid/">
          <BsLinkedin/>
          </a>
          </div>
        <div>
          <a href='https://wa.me/+2347087561411'>
          <BsWhatsapp/>
          </a>
          </div>
        <div>
          <a href='https://www.tiktok.com/@david_khen'>
          <BsTiktok/>
          </a>
          </div>
    </div>
  )
}

export default SocialMedia