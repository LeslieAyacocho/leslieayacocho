import Header from '../Header2';
import * as React from "react";
import { useEffect } from "react";
import image from '../img/ui designs/GK.png'
import image2 from '../img/GK-stylesheet.png'
import { motion } from "framer-motion";
const GK = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return ( 
        <>  
        <motion.div 
        initial={{width: 0}}
        animate={{width: "100%"}}
        exit={{x: "100%"}}
        >
        <Header />
        <div className="project-page">
            <div className='text-body '>
            <h1 className='text-title text-2xl md:text-4xl lg:text-4xl font-bold mb-3'>GK - USA <em>September 2022</em></h1>
            <div className='page-sec'>
                <h4 className='text-xl font-semibold mb-2'>About the Project</h4>
                <p className="paragraph"> 
                Founded in 2009, GK USA is a duly registered 501c3 corporation working independently, but in conjunction with GKCDFI, a Philippine-based non-profit movement that aims to end poverty by building caring and sharing communities.  It employs an integrated and holistic approach with values formation and leadership development at its core.</p>
                <p></p>
            </div>

            <div className="page-sec">
                <a href="https://www.figma.com/proto/HB7A14cuuWbgRMvfpiMPf7/GK-USA?node-id=107%3A5" className='underline'><i class="fab fa-figma mx-1 text-xl">:</i>Figma Prototype</a>
            </div>
            </div>

            <div className="web-img">
                <img src={image2} alt="Homepage" className='w-50'/>
                <img src={image} alt="Homepage" className='w-50'/>
            </div>


        </div>
        </motion.div>
        </>
    );
}

export default GK;