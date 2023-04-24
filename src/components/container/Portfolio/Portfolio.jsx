import React, { useEffect, useState } from 'react';
import "./Portfolio.scss"
import { workNavs } from "../../../Data";
import { workImages } from '../../../Data';
import { FiGithub, FiEye } from "react-icons/fi"
import { motion } from 'framer-motion';


const Portfolio = () => {
  const [tab, setTab] = useState({ name: "todos" });
  const [works, setWorks] = useState([]);
  const [active, setActive] = useState(0);



  useEffect(() => {
    if (tab.name === "todos") {
      setWorks(workImages)
    } else {
      const newWork = workImages.filter(workImage => {
        return workImage.category.toLowerCase() === tab.name;

      })
      setWorks(newWork)
    }
  }, [tab])

  const activeTab = (e, index) => {
    setTab({ name: e.target.textContent.toLowerCase() });
    setActive(index)
  }


  const techsById = workImages.reduce((acc, workImage) => {
    acc[workImage.id] = workImage.techs;
    return acc;
  }, {});

  return (
    <div className="container" id="portfolio">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"

      >
        <span>Meu trabalho</span>
        <h1>Projetos Incríveis</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="buttons"
      >
        {workNavs.map((workNav, index) => {
          return (
            <button
              onClick={(e) => activeTab(e, index)}
              className={`${active === index ? "active" : ""}`}
              key={index}>{workNav}</button>
          )
        })}
      </motion.div>
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [-250, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, y: -50 }}
        className="workImages"
      >
        {works.map((work) => {
          return (
            <div className="workImage"
              key={work.id}
            >
              <img src={work.img} alt="workImg" />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className='hoverLayer'
              >

                <motion.a href={work.link}
                  target='_blank'
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 1.1] }}
                  transition={{ duration: 0.3 }}
                >
                  <FiGithub />
                </motion.a>
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 1.1] }}
                  transition={{ duration: 0.3 }}
                  className="description"
                >
                  {work.desc}
                </motion.div>

                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 1.1] }}
                  transition={{ duration: 0.3 }}
                  className="techs"
                >


                  <ul>
                    {work.techs ? work.techs.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    )) : null}
                  </ul>




                </motion.div>


                {/* <motion.a href='#'
                    whileInView={{scale: [0,1]}}
                    whileHover={{scale: [1, 1.1]}}
                    transition={{duration: 0.3}}
                    >
                      <FiEye />
                  </motion.a> */}
              </motion.div>

            </div>
          )
        })}
      </motion.div>

      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [250, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        className="talk"
      >
        <div className="talk_left">
          <h3>disponibilizarei novos projetos aqui <br /> <span>muito em breve</span></h3>
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="talk_right">
          <a href="#contact"
          >
            contato
          </a>
        </motion.div>
      </motion.div>

    </div>
  )
}

export default Portfolio