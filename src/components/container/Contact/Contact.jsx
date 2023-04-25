import React, { useState } from 'react';
import "./Contact.scss";
import { contacts } from '../../../Data';
import { socialIcons } from '../../../Data';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'






const Contact = () => {
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  
  function sendEmail() {
    if( firstName === '' || lastName === '' || email === '' || message === '') {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: firstName,
      message: message,
      email: email

    }
    
    emailjs.send("service_nil0nw8", "template_jhuk43c", templateParams, "_DBpxkySGvDCbDKhY")
    .then((response) => {
      // console.log("Email enviado!!!", response.status, response.text)
      setfirstName('')
      setlastName('')
      setEmail('')
      setMessage('')
      window.alert("Email enviado com sucesso! Obrigado...")
    }, (error) => {
      console.log("ERRO: ", error)
    })
  }

  return (
    <div className="container" id="contact">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}} 
        className="title"
      >
            <span>curtiu?</span>
            <h1>Entre Em Contato</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [-150,0], opacity: 1 }}
          transition={{duration: 1}}
          className='contact_left_container'>
          <h3>Mande Um Oi</h3>
          <p className='contact_text'>
            Sejam novas idéias, feedbacks ou ofertas, eu estou aberto para receber mensagens. Só preencher o formulário ao lado colocando seu e-mail para retorno.
          </p>
          {contacts.map(contact => {
            return (
              <div className='contact_left' key={contact.id}>
                <div className="icon">
                  {contact.icon}
                </div>
                <p>{contact.infoText}</p>
              </div>
            )
          })}
          <div className="social_icons">
            {socialIcons.map((socialIcon, index) => {
            return (
              <div key={index} >
                {/* {socialIcon} */}
              </div>
            )
          })}
          </div>
        </motion.div>
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [150,0], opacity: 1 }}
          transition={{duration: 1}}
          className="contact_right"
        
        >
          <h3>via e-mail</h3>
          <div className="row">
            <input type="text" placeholder='Nome' value={firstName} onChange={(e) => setfirstName(e.target.value)}/>
            <input type="text" placeholder='Sobrenome' value={lastName} onChange={(e) => setlastName(e.target.value)}/>
          </div>
          <div className="row">
            <input type="email" placeholder='Seu Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="row">
            <textarea placeholder='Mensagem' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{duration: 0.3}}
            className="btn"
          >
            <a href="#"  onClick={sendEmail}>Enviar</a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact