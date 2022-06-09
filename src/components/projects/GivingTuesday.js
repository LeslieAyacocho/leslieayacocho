import Header from '../Header2';
import * as React from "react";
import { useEffect } from "react";
import image from '../img/ui designs/Giving.png'
import { motion, AnimatePresence } from "framer-motion";
const GivingTuesday = () => {

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
                <h1>Giving Tuesday</h1>
                <p> <br />
                The output required is the Home page only. <em>(Design was not picked)</em> </p>
                <p><i>July 2021</i></p>

                <hr />
                <a href="https://www.figma.com/file/nGEniWezlUiPeh6wtmpB56/GivingTuesday?node-id=0%3A1"><i class="fab fa-figma"></i> : https://www.figma.com/file/nGEniWezlUiPeh6wtmpB56/GivingTuesday?node-id=0%3A1</a>
            </div>

            <div className="web-img">
                <img src={image} alt="Homepage" className='w-50'/>
            </div>


        </div>
        </motion.div>
        </>
    );
}

export default GivingTuesday;