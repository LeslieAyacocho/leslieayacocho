import Header from '../Header2';
import * as React from "react";
import {  useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { motion } from "framer-motion";
import { images } from "./components-project/cliqq-images";


const Cliqq = () => {
    const history = useHistory()
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [history])

    return (  
        
        <>
        <motion.div 
        initial={{width: 0}}
        animate={{width: "100%"}}
        exit={{x: "100%"}}
        >
        <Header />
        <div className="project-page">
            
            <div className='text-body'>
                {/* Title Year */}
                <h1 className='text-title text-2xl md:text-4xl lg:text-4xl font-bold mb-3'>CLiQQ - Redesign <em>October 2022</em></h1>

                {/* About Project */}
                <div className='page-sec'>
                        <h4 className='text-xl font-semibold'>About the Project</h4>
                        <p  className="paragraph">CLiQQ Rewards is 7-Eleven's loyalty program. Customers Earn points by presenting a loyalty barcode every time they buy at 7-Eleven. </p>
                        <p  className="paragraph"><em><strong>Disclaimer:</strong> This is not affiliated with Cliqq by 7-Eleven in any way. This purpose is only to enhance my design skills in mobile design by redesigning the current mobile application.</em></p>
                </div>

                <div className="page-sec">
                <a href="https://www.figma.com/proto/pFrPjjP9B7NFd3gJljCF2c/CLiQQ---Redesign?node-id=4%3A28" className='underline'><i class="fab fa-figma mx-1 text-xl">:</i>Figma Prototype</a>
            </div>
            </div>
    
            
            <div className="gallery-img">   
                {images.map((url) => (
                    <img src={url} class="w-full" />
                ))}
            </div>
        </div>
        </motion.div>
    </>
    );
}
export default Cliqq;