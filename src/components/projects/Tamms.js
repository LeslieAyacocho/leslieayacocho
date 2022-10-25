// import Header from '../Header2';
// import * as React from "react";
// import { useState, useEffect } from "react";
// import { useHistory } from 'react-router-dom';
// import { motion, AnimatePresence } from "framer-motion";
// import { wrap } from "popmotion";
// import { images } from "./components-project/tamms-images";
// import {Col, Row} from 'react-bootstrap'

// const Tamms = () => {
//     const history = useHistory()
    
//     useEffect(() => {
//         window.scrollTo(0, 0)
//     }, [history])

//     const variants = {
//         enter: (direction) => {
//             return {
//             x: direction > 0 ? 1000 : -1000,
//             opacity: 0
//             };
//         },
//         center: {
//             zIndex: 1,
//             x: 0,
//             opacity: 1
//         },
//         exit: (direction) => {
//             return {
//             zIndex: 0,
//             x: direction < 0 ? 1000 : -1000,
//             opacity: 0
//             };
//         }
//         };

//     const swipeConfidenceThreshold = 10000;
//     const swipePower = (offset, velocity) => {
//     return Math.abs(offset) * velocity;
//     };

//     const [[page, direction], setPage] = useState([0, 0]);

//     const imageIndex = wrap(0, images.length, page);

//     const paginate = (newDirection) => {
//         setPage([page + newDirection, newDirection]);
//     }

//     return (  
        
//         <>
//         <motion.div 
//         initial={{width: 0}}
//         animate={{width: "100%"}}
//         exit={{x: "100%"}}
//         >
//         <Header />
//         <div className="project-page">
            
//             <div className='text-body '>
//                 <h1>TOURISM ANALYTICS FOR METRO MANILA SYSTEM (TAMMS)</h1>
//                 <p>TAMMS is a system output for System output for System Analysis and Design Course (TUP-T 2020) using Codeigniter</p>
//                 <p><i>March 2020</i></p>

//                 <hr />
//                 <a href="https://github.com/LeslieAyacocho/TAMMS"><i class="fab fa-github"></i> : https://github.com/LeslieAyacocho/TAMMS</a>
//             </div>

            
//             <div className="slider">
//                 <div className="slider-container">

//                     <AnimatePresence initial={false} custom={direction}>
//                         <motion.img
//                             key={page}
//                             src={images[imageIndex]}
//                             custom={direction}
//                             variants={variants}
//                             initial="enter"
//                             animate="center"
//                             exit="exit"
//                             transition={{
//                             x: { type: "spring", stiffness: 300, damping: 30 },
//                             opacity: { duration: 0.2 }
//                             }}
//                             drag="x"
//                             dragConstraints={{ left: 0, right: 0 }}
//                             dragElastic={1}
//                             onDragEnd={(e, { offset, velocity }) => {
//                             const swipe = swipePower(offset.x, velocity.x);
                
//                             if (swipe < -swipeConfidenceThreshold) {
//                                 paginate(1);
//                             } else if (swipe > swipeConfidenceThreshold) {
//                                 paginate(-1);
//                             }
//                             }}
//                         />
//                     </AnimatePresence>
//                     <div className="next" onClick={() => paginate(1)}>
//                     <i className="fas fa-angle-right"></i>
//                     </div>
//                     <div className="prev" onClick={() => paginate(-1)}>
//                     <i className="fas fa-angle-right"></i>
//                     </div>
//                 </div>
//             </div>

//             <div className='text-body-below'>
//                 <h4>Technologies Used</h4>
//             </div>
//             <Row>
//                 <Col>
                    
//                         <i class="fab fa-laravel"></i> Codeigniter
                
//                 </Col>
//                 <Col>
                    
//                     <i class="fab fa-bootstrap"></i>  Bootstrap
                
//                 </Col>
//                 <Col>
                    
//                     <i class="fas fa-chart-area"></i> Google Charts
                
//                 </Col>
//                 <Col>
                    
//                     <i class="fas fa-database"></i> MySQL
                
//                 </Col>
//             </Row>
//             <div className='text-body'>
//                 <h5>Role:</h5>  <p>Front End Developer {"&"} UI Designer</p>

//             </div>
            
//         </div>
//         </motion.div>
//     </>
//     );
// }
// export default Tamms;