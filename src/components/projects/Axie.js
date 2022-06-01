import Header from '../Header2';
import * as React from "react";
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { images } from "./components-project/axie-images";
import {Col, Row} from 'react-bootstrap'

const Axie = () => {
    const history = useHistory()
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [history])

    const variants = {
        enter: (direction) => {
            return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => {
            return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
            };
        }
        };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
    };

    const [[page, direction], setPage] = useState([0, 0]);

    const imageIndex = wrap(0, images.length, page);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    }

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
                <h1>Axie Energy Counter</h1>
                <p>Energy Counter is a tool for Axie Infinity players for energy counting in Arena battles.</p>
                <p><em>November 2021</em></p>

                <hr />

                <a href="https://github.com/LeslieAyacocho/Axie-Energy-Counter"><i class="fab fa-github"></i> : https://github.com/LeslieAyacocho/Axie-Energy-Counter</a>
                <br />
                <a href="https://energy-counter-li.herokuapp.com/"> <i class="fas fa-laptop"></i> : https://energy-counter-li.herokuapp.com</a>
            </div>

            
            <div className="slider">
                <div className="slider-container">

                    <AnimatePresence initial={false} custom={direction}>
                        <motion.img
                            key={page}
                            src={images[imageIndex]}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);
                
                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                            }}
                        />
                    </AnimatePresence>
                    <div className="next" onClick={() => paginate(1)}>
                    <i className="fas fa-angle-right"></i>
                    </div>
                    <div className="prev" onClick={() => paginate(-1)}>
                    <i className="fas fa-angle-right"></i>
                    </div>
                </div>
            </div>

            <div className='text-body-below'>
                <h4>Technologies Used</h4>
            </div>
            <Row>
                <Col>
                    
                <i class="fab fa-vuejs"></i> Vue JS
                
                </Col>
                <Col>
                    
                    <i class="fab fa-bootstrap"></i>  Bootstrap
                
                </Col>
            </Row>
            <div className='text-body'>
                <h5>Role:</h5>  <p>Full Stack Developer {"&"} UI/UX Designer</p>

            </div>
            
        </div>
        </motion.div>
    </>
    );
}
export default Axie;