//next image
import Image from "next/image"

//components
import ParticlesContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar' 
import Header from '../components/Header'

//framer motion
import { motion } from 'framer-motion'
import RotatingWords from "../components/RotatingWords"
import React from "react"


//variants
import { fadeIn } from '../variants'
const Home = () => {
  return <div className="bg-primary/60 h-full ">
  <Header/>

    {/* text */}
    <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
      <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
        {/* title */}
        <motion.h1
        variants={fadeIn('down', 0.2)} 
        initial="hidden" 
        animate="show" 
        exit="hidden"
        className="h1">
          Seja bem-vindo/a <br />
        </motion.h1>
        <div  className="change-text"> 
            <motion.h3
            variants={fadeIn('right', 0.2)} 
            initial="hidden" 
            animate="show" 
            exit="hidden"
            >Aqui pode consultar:</motion.h3>
            <motion.h3
            variants={fadeIn('left', 0.2)} 
            initial="hidden" 
            animate="show" 
            exit="hidden"
            >&nbsp;<span className="text-accent"><RotatingWords/></span></motion.h3>
          </div>
        {/* subtitle */}
        
        <motion.p
        variants={fadeIn('up', 0.3)} 
        initial="hidden" 
        animate="show" 
        exit="hidden"
        className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
          Temos para si brochuras, termologias,
          vocabulários e gramáticas da Língua Portuguesa com acesso gratuito.
        </motion.p>
        {/* btn */}
        <div className="flex justify-center xl:hidden relative ">
    <ProjectsBtn /> 
        </div>
        <motion.div 
        variants={fadeIn('down', 0.4)} 
        initial="hidden" 
        animate="show" 
        exit="hidden"
        className="hidden xl:flex "
        >
    <ProjectsBtn />

          
           
        </motion.div>
      </div>
    </div>
    {/* image */}
    <div className="w-[1200px] h-full absolute right-0 bottom-0">
      {/* bg img */}
      <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'>
     
      </div>
      
      {/* particles */}
        
      {/* avatar img */}
      {/*<motion.div 
      variants={fadeIn('up', 0.5)} 
      initial="hidden" 
      animate="show" 
      exit="hidden"
      transition={{duration: 1, ease: 'easeInOut'}}
      className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
        <Avatar />
      </motion.div>*/}
      <ParticlesContainer />
      

    </div>
    
  </div>;
};

export default Home;
