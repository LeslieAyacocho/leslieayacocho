import Header from './Header2';
import * as React from "react";
import {  useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { motion } from "framer-motion";


const Net = () => {
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
        <div class="name flex items-center justify-center text-xl">
            <div>
                <h1 className='text-4xl mx-5 px-5 md:text-5xl g:text-5xl flex inline-flex items-center justify-center'>Hi there! 👋</h1>
            </div>
            <div>
            <p className='flex mx-5 inline-flex items-center justify-center'>Welcome to my portfolio, I'm Leslie. <br />
            I'm a Web Developer and a UI/UX  Designer based in Taguig, Philippines. <br /> I also do graphic design that includes logo/branding and publication materials.</p>
            </div>
            
        </div>
        </motion.div>
    </>
    );
}
export default Net;