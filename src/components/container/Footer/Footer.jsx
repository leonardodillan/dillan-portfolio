import React from 'react';
import "./Footer.scss"
import { linkedinIcon, githubIcon } from '../../../Data';
// socialIcons
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity:
          1
      }}
      transition={{duration: 1.5}}
      className='footer'
    >
      {/* <div className="copyright">
        <p>Copyright&copy;2022 All rights reserved.Made by <span>Ye Lin Ko</span></p>
      </div> */}
      <div className="followMe">
        <h4>Made with ♥</h4>
        <div className="stick"></div>
        <div className="social_icons">
            {/* {socialIcons.map((socialIcon, index) => {
            return (
              <div key={index} >
                {socialIcon}
              </div>
            )
          })} */}
          <a href="https://github.com/leonardodillan" target="_blank">
            {githubIcon}
          </a>
          <a href="https://www.linkedin.com/in/leonardodillan/" target="_blank">
            {linkedinIcon}
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default Footer