import React,  {useState, useEffect} from 'react'

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
        onClick= {() => setExpanded(expanded ? false : true)}
        >
        <div className="card-project bg-white2">
            {/* <AnimatePresence initial={false}>
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
                        transition={{ duration: .3, transition: [0.1, 0.1, 0.1, 1] }}>
                        <div className='grid flex justify-center items-centerd w-1/2'>
                        <img src={image} className=''/>
                        </div>
                    </motion.div>
                    )
                }
            </AnimatePresence> */}
                
                <div className="overflow-hidden  aspect-video  cursor-pointer rounded-xl relative group">
                            <img
                                alt=""
                                className="item-image"
                                src={image}
                            />
                        </div>
                </div> 

                <div className='item-list'>
                    <div className='b-left flex justify-center items-center col-span-1'>
                    {year}
                    </ div>
                    < div className="b-left flex justify-center items-center col-span-2">
                    {title}
                    </ div>
                    <div className="b-left flex justify-center items-center">
                    <Link to={link} className="hover:underline"><p>View Project</p></Link>
                </ div>
                </div>
             {/* <img src={image} className=''/>
            <div className='grid grid-cols-1 lg:grid-cols-4 item-list'>
                <div className=' flex justify-center items-center'>
                {year}
                </ div>
                < div className="b-left flex justify-center items-center">
                {title}
                </ div>
                < div className="b-left flex justify-center items-center px-2" >
                {tech}
                </ div>
                <div className="b-left flex justify-center items-center">
                    <Link to={link} className="hover:underline"><p>View Project</p></Link>
                </ div>
            </div>             */}
        {/* </div> */}
        </motion.div>
        </>
    );
}

export default Cards;