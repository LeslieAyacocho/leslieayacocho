import Header from '../Header2';
import * as React from "react";
import { useEffect } from "react";
import image from '../img/ui designs/baliuag.png'
import { motion, AnimatePresence } from "framer-motion";

const Baliuag = () => {

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
                <h1>Baliuag University</h1>
                <p>Baliuag University is a private university founded in 1925, located at Bulacan city. <br />
                The output required is the Home page only. <em>(Design was not picked)</em> </p>
                <p><i>January 2022</i></p>

                <hr />
                <a href="https://www.figma.com/file/gECyHBRSk6JVgUCDJJNxGR/Baliuag-University?node-id=0%3A1"><i class="fab fa-figma"></i> : https://www.figma.com/file/gECyHBRSk6JVgUCDJJNxGR/Baliuag-University?node-id=0%3A1</a>
            </div>

            <div className="web-img">
                <img src={image} alt="Homepage" className='w-50'/>
            </div>


        </div>
        </motion.div>
        </>
    );
}

export default Baliuag;