import Header from '../Header2';
import * as React from "react";
import {  useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { motion } from "framer-motion";
import { images } from "./components-project/crypto-images";


const CryptoNews = () => {
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
                <h1 className='text-title text-2xl md:text-4xl lg:text-4xl font-bold mb-3'>CryptoNews <em>March 2021</em></h1>

                {/* About Project */}
                <div className='page-sec'>
                        <h4 className='text-xl font-semibold'>About the Project</h4>
                        <p  className="paragraph">CryptoNews is a system output for System Architecture and Integration Course (TUP-T 2021)</p>
                </div>
            </div>
                {/* Role */}
            <div className="page-sec">
                <h4 className='flex inline-flex text-xl font-semibold' >Role:</h4>
                <p  className="flex inline-flex px-2">Full Stack Developer {"&"} UI/UX Designer</p>
            </div>
            <div className="page-sec">
                <a href="https://github.com/LeslieAyacocho/API-cryptosnews" className='underline'><i class="fab fa-github mx-5 text-xl">:</i>Github Sourcecode</a>
                </div>
            {/* Technologies Used  */}
        <div  className='grid grid-cols-1'>
            <h4 className='text-xl font-semibold p-4' >Technologies Used</h4>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 '>
                <div  className='tech-list-l'>
                        <i class="fab fa-laravel"></i> Laravel
                    </div>
                    <div  className='tech-list'>
                        
                    <i class="fab fa-bootstrap"></i>  Bootstrap
                    
                    </div>
                    <div  className='tech-list'>
                        
                    <i class="fas fa-chart-area"></i> Google Charts
                    </div>

                    <div  className='tech-list-l'>
                        
                    <i class="fas fa-database"></i> MySQL
                        
                        </div>
                        <div  className='tech-list'>
                            
                        <i class="fas fa-network-wired"></i> jQuery 
                        
                        </div>
                        <div  className='tech-list'>
                            
                        <i class="fas fa-network-wired"></i>  CryptoCompare News & CoinRanking API
                        
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
export default CryptoNews;