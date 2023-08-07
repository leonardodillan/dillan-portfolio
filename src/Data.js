import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaSass, FaFigma, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaDribbble, FaInstagram, FaLinkedin, FaAws, FaGithub } from "react-icons/fa";

import { SiTypescript } from "react-icons/si";
import work1 from "./assets/work-individual.png";
import work2 from "./assets/biotech.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/workx.png";
import work7 from "./assets/chat-app.png";
import work8 from "./assets/todo-app.png";




import { MdFileDownload } from "react-icons/md";
// import { url } from "inspector";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"]
 

export const socialIcons = [

  <FaLinkedin />,
  <FaGithub />

  
]

export const githubIcon = <FaGithub />

export const linkedinIcon = <FaLinkedin />

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Nome",
    value: "Leonardo Dillan"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Telefone",
    value: "11 95488-8446"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "mecdillan@gmail.com"
  }
]

export const icons = [<FaHtml5/>, <FaCss3 />, <FaFigma name="Figma" />, <SiTypescript name="Typescript" />, <FaReact name="React" />, <FaNodeJs name="Nodejs" />, <FaSass name="Sass"/>, <FaAws name="AWS" />]

export const iconDownload = <MdFileDownload />

export const experiences = [
  {
    id: 1,
    year: "2022-23",
    position: "Front-End Developer",
    company: "Orbitall Payments"
  },
  {
    di: 2,
    year: "2021",
    position: "Expert em Interação",
    company: "Teleperformance"
  },
  {
    id: 3,
    year: "2018",
    position: "Aprendiz",
    company: "Porto Seguro Seguros"
  }
]
export const finishes = [
  {
    id: 1,
    number: '+1',
    itemName: "Ano de Experiência em Desenvolvimento"
  }
]


export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "web",
    link: "https://github.com/leonardodillan/projeto-individual-sptech",
    techs: ["Javascript", "NodeJS", "MySQL", "API Rest"],
    desc: "Aplicação WEB realizada para trabalho de conclusão de semestre da faculdade. Conta com um quiz em JavaScript puro"
    
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web",
    techs: ["Javascript", "HTML", "CSS", "MySQL", "Node"],
    desc: "Site institucional feito para um projeto acadêmico, com dashboard coletando dados em tempo real"
  },
  // {
  //   id: 3,
  //   img: work3,
  //   name: "project 3",
  //   category: "web",
  //   techs: [""]
  // },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "design",
    techs: ["Figma"],
    desc: "Design app de plantas"
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: 'web',
    link: "https://github.com/leonardodillan/app-controle-financeiro/tree/master",
    techs: ["React", "Sass"],
    desc: "Aplicação CRUD de gestão financeira, que gerencia as entradas e saídas de uma conta"
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "design",
    techs: ["Figma"],
    desc: "Design de página de uma aplicação relacionada à gastronomia asiática"
  },
  {
    id: 7,
    img: work7,
    name: "project 7",
    category: "web",
    link: "http://chat-app-dillan.vercel.app/",
    techs: ["Next.js", "TypeScript", "Tailwind", "Prisma", "MongoDB"],
    desc: "Chat com mensagens em tempo real"
  },
  {
    id: 8,
    img: work8,
    name: "project 8",
    category: "app",
    link: "https://github.com/leonardodillan/todo-app.git",
    techs: ["React Native"],
    desc: "Lista to-do feito em React Native"
  }
];






export const workNavs = [
  "Todos", "Web", "App", "Design"
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "São Paulo - SP"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "mecdillan@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+11 954888446"
  }
]
