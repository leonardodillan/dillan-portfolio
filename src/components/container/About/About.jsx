import React from 'react'
import "./About.scss";

import { iconDownload } from '../../../Data';
import { motion } from 'framer-motion';
import { bios } from '../../../Data';
import portfolio from "../../../assets/profile.jpg"
import cv from "../../../assets/leonardo-dillan-cv.pdf"

const About = () => {


  return (
    <div className="container " id='about'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title">
        <span>Quem sou eu?</span>
        <h1>Sobre mim</h1>
      </motion.div>

      <div className="about_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left">
          <motion.img src={portfolio}
            whileHover={{ y: -20, x: -25 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.div className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >

          <p>
            Sou desenvolvedor front-end bastante apaixonado pelo que faço.
            Fortemente influenciado por artes visuais e digitais, música, cinema, e jogos.
            Atualmente estou cursando o último semestre em Análise e Desenvolvimento de Sistemas pela Faculdade de Tecnologia Bandeirantes e estou
            trabalhando na Stefanini: Orbitall Payments como Desenvolvedor Front-End.
          </p>
          {bios.map(bio => {
            return (
              <div className="bio" key={bio.id}>
                <span className='bioKey'>{bio.icon}{bio.key}</span>
                <span className='bioValue'>{bio.value}</span>
              </div>
            )
          })}
          <motion.a href={cv} download="cv-dillan"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
           
            <span>{iconDownload}</span> Download CV
            
          </motion.a>
        </motion.div>

      </div>

    </div>
  )
}

export default About