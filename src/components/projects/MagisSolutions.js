import Header from '../Header2';
import * as React from "react";
import { useEffect } from "react";
import image from '../img/ui designs/magis.png'
import { motion, AnimatePresence } from "framer-motion";
const MagisSolutions = () => {
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
                <h1>Magis Solutions</h1>
                <p> MagisSolutions provides digital marketing for clients.<br />
                The output required is for the job application is the home page.</p>
                <p><i>May 2021</i></p>

                <hr />
                <a href="https://www.figma.com/file/AKzmkhMIIdAYHGwutQ4FZQ/MagisSolutions?node-id=0%3A1"><i class="fab fa-figma"></i> : https://www.figma.com/file/AKzmkhMIIdAYHGwutQ4FZQ/MagisSolutions?node-id=0%3A1</a>
            </div>

            <div className="web-img">
                <img src={image} alt="Homepage" className='w-50'/>
            </div>


        </div>
        </motion.div>
        </>
    );
}

export default MagisSolutions;