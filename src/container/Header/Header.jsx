import React from 'react'
import "./Header.scss"
import { motion } from 'framer-motion'
import {images} from "../../constants"
import AppWrap from "../../wrapper/AppWrap"
const Header = () => {

  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };
  return (
    <div className='app__header app__flex'>
      <motion.div whileInView={{x:[-100, 0], opacity: [0,1]}} transition={{duration:0.5}} className='app__header-info'>
        <div className='app__header-badge'>
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{marginLeft:20}}>
              <p className='p-text'>Hello, I am <h1 className='head-text'>David Olotu</h1> </p>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>Web Designing</p>
            <p className='p-text'>Freelancer</p>
          </div>
        </div>
      </motion.div>

    <motion.div  whileInView={{  opacity: [0,1]}} transition={{duration:0.5, delayChildren: 0.5}} className='app__header-img'>
      
    <img src={images.user} alt="prfile-bg" />
    <motion.img  whileInView={{ scale: [0,1]}} transition={{duration:1,  ease: "easeInOut"}} src={images.circle} className='overlay__circle'/>
    </motion.div>

    <motion.div variants={scaleVariants} whileInView={scaleVariants.whileInView} className='app__header-circles'>
    {[images.react, images.node, images.sass].map((circle,index)=> (
      <div className='circle-cmp app__flex ' key={`circle-${index}`}>
        <img src={circle} alt="" />
      </div>
    ))}
    </motion.div>
    </div>
  ) 
}

export default AppWrap(Header, "home") 