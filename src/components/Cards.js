import React,  {useState, useEffect} from 'react'

import {Button, Row, Col, Container} from 'react-bootstrap'
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';
    
const Cards = ({image, title, year, tech, link}) => {
    const [expanded, setExpanded] = useState(false)

    useEffect(() => {
    }, [expanded])
    
    return ( 
        <>
        <motion.div 
        initial={false}
        whileInView= {() => setExpanded(true)}
        >
        <div className="card-project bg-white">
            <AnimatePresence initial={false}>
                {
                    expanded && (
                        <motion.div  className='cover-img'
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: .5, transition: [0.25, 0.1, 0.25, 1] }}>
                        <img src={image} className='w-100 img-border'/>
                    </motion.div>
                    )
                }
            </AnimatePresence>
            <div className='card-labels text-center'>
                <div className="row">
                <span className="col-2 " >
                {year}
                </span>
                <span className="col-4 border-txt">
                {title}
                </span>
                <span className="col-4 border-txt" >
                {tech}
                </span>
                <span className="col-2 text-hover border-txt">
                    <Link to={link}><p>View Project</p></Link>
                </span>
                </div>
            </div>            
        </div>
        </motion.div>
        </>
    );
}

export default Cards;