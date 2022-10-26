import Header from '../Header2';
import * as React from "react";
import {  useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { motion } from "framer-motion";
import { images } from "./components-project/oats-images";


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
        <div className="project-page">
            
            <div className='text-body'>
                <h1 className='text-title text-4xl font-bold mb-3'>Online Archiving Thesis System (OATS) <em>2021 &mdash; 2022</em></h1>

                <div className='page-sec'>
                        <h4 className='text-xl font-semibold'>About the Project</h4>
                        <p  className="paragraph">The Online Archiving Thesis System (OATS) is a website that has a catalog of all the theses of graduated students from the Technological University of the Philippines Taguig (TUP-Taguig). 
                        This system is an output for IT Project Capstone 2.</p>
                </div>
                <div className='page-sec'>
                        <h4 className='text-xl font-semibold'>Objectives</h4>
                    
                    <ul className='ml-4 list-disc paragraph'>
                        <li>
                            Align visual elements with a modern design that has a minimal and clean look for efficient document browsing.
                        </li>
                        <li>
                            Develop a digital library for researchers inside and outside of the Technological University of the Philippines - Taguig Campus.
                        </li>
                        <li>
                            Help the researchers in finding local literature for their research through digitizing the thesis papers, and a citation feature available in APA, IEEE, and MLA using built-in citation generators of the website.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="page-sec">
                <h4 className='flex inline-flex text-xl font-semibold' >Role:</h4>
                <p  className="flex inline-flex px-2">Full Stack Developer {"&"} UI/UX Designer</p>
            </div>

        <div  className='grid grid-cols-1'>
            <h4 className='text-xl font-semibold p-4' >Technologies Used</h4>
                <div className='grid grid-cols-4 gap-3 '>
                <div  className='tech-list-l'>
                        <i class="fas fa-database "></i> MongoDB
                    </div>
                    <div  className='tech-list'>
                        
                    <i class="fab fa-node-js"></i>  Express
                    
                    </div>
                    <div  className='tech-list'>
                        
                    <i class="fab fa-react"></i> React JS
                    </div>
                    <div  className='tech-list'>
                        
                    <i class="fab fa-node"></i> Node.js
                    
                    </div>

                    <div  className='tech-list-l'>
                        
                        <i class="fas fa-chart-area"></i> Chart.js
                        
                        </div>
                        <div  className='tech-list'>
                            
                        <i class="fas fa-file-pdf"></i> pdf-viewer-reactjs
                        
                        </div>
                        <div  className='tech-list'>
                            
                        <i class="fas fa-cube"></i> Tesseract.js 
                        
                        </div>
                        <div  className='tech-list'>
                            
                        <i class="fab fa-bootstrap"></i> Bootstrap
                        
                        </div>
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
export default Net;