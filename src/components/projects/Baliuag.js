import Header from '../Header2';
import * as React from "react";
import { useEffect } from "react";
import image from '../img/ui designs/baliuag.png'
import image2 from '../img/baliuag-stylesheet.png'
import { motion } from "framer-motion";

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
                
            <h1 className='text-title text-2xl md:text-4xl lg:text-4xl font-bold mb-3'>Baliuag University <em>January 2022</em></h1>
                    <div className='page-sec'>
                        <h4 className='text-xl font-semibold'>About the Project</h4>
                        <p  className="paragraph">Baliuag University is a private university founded in 1925, located at Bulacan city.
                The output required is the Home page only.</p>
                    </div>
                
                <div className="page-sec">
                    <a href="https://www.figma.com/proto/gECyHBRSk6JVgUCDJJNxGR/Baliuag-University?node-id=0%3A1"className="underline"><i class="fab fa-figma mx-2 text-xl"> :</i>Figma Prototype</a>
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

export default Baliuag;