import Header from '../Header2';
import * as React from "react";
import { useEffect } from "react";
import image from '../img/ui designs/Giving.png'
import image2 from '../img/giving-stylesheet.png'
import { motion } from "framer-motion";
const GivingTuesday = () => {

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
            <h1 className='text-title text-2xl md:text-4xl lg:text-4xl font-bold mb-3'>Giving Tuesday <em>July 2021</em></h1>
            <div className='page-sec'>
                <h4 className='text-xl font-semibold mb-2'>About the Project</h4>
                <p className="paragraph"> 
                GivingTuesday is a global
generosity movement unleashing the power of radical generosity.
GivingTuesday was created in 2012 as a simple idea: a day that encourages
people to do good.</p>
                <p></p>
            </div>

            <div className="page-sec">
                <a href="https://www.figma.com/proto/nGEniWezlUiPeh6wtmpB56/GivingTuesday?node-id=0%3A1" className='underline'><i class="fab fa-figma mx-1 text-xl">:</i>Figma Prototype</a>
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

export default GivingTuesday;