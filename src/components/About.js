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
        
        </motion.div>
    </>
    );
}
export default Net;