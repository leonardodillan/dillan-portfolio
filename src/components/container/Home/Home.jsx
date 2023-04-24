import React from 'react'
import portfolio from "../../../assets/dillan-profile.jpg"
import "./Home.scss"
import { motion } from 'framer-motion'


const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1
      }

    }
  }


  return (
    <motion.div className="container " id='home'
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={
        {
          duration: 2,
          delay: 0.5
        }
      }
    >
      <div className="profile">
        <img src={portfolio} alt="portfolio" />
      </div>
      <div className="profile_text">
        <h3 className='name'>Olá, sou <span>Leonardo Dillan</span> </h3>
        <span className='job'>Desenvolvedor Front-End</span>
        <span className='text'><span>Apaixonado</span><span>por desenvolvimento</span><span>web e mobile</span></span>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
        >
          Conectar</motion.a>
        <div
          className="web"

        >
          Desenvolvimento Web
        </div>
        <div
          className="ui"
        >
          UI/UX Designer
        </div>
        <div
          className="frontend"
        >
          Front-End
        </div>
        <div
          className="mobile"
        >
          Mobile
        </div>
      </div>
    </motion.div>
  )
}

export default Home