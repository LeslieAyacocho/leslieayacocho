
import { Link as Link2} from 'react-scroll'

import { Container } from 'react-bootstrap';


import Cards from "./Cards.js" 

import ranking from './img/ranking.png'
import axie from './img/axie.png'
import tamms from './img/tamms.png'
import net from './img/net.png'
import Header from './Header.js';
import Baliuag from './img/Baliuag.png' 
import GivingTuesday from './img/GivingTuesday.png' 
import MagisSolutions from './img/MaigsSolutions.png' 

import { motion } from "framer-motion"

const Home = () => {
    return (
        <>
        <motion.div 
        // initial={{width: 0}}
        animate={{width: "100%"}}
        exit={{x: "100%"}}
        >
        <Header />
        <div className="landing text-center">

        <div class="name"> 
        <h1>LESLIE AYACOCHO</h1>
        <p>Web Developer & Designer</p>
        </div> 


        <div className='arrow'>
        <span>
            <Link2
                activeClass="active"
                    to="web-developments"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={100}
            >
                <i class="fas fa-angle-down"></i>
            </Link2>
        </span>
        </div>

        </div>

        <div id="web-developments" className='text-center'>
        <h4 className='p-3 title-section-top'> WEB DEVELOPMENTS</h4>

                <Cards image={axie} title={'Axie Energy Counter'} year={'2021'} tech={'Vue, Bootstrap Vue'}  link={'/axie-energy-counter'}/>

                
    
                <div className='space'></div>

        
                <Cards image={net} title={'NET'} year={'2021'} tech={'Laravel, MySQL, Bootstrap, jQuery, Google Charts'}  link={'/net'}/>
        

                <div className='space'></div>

        
                <Cards image={ranking} title={'CryptoNews'} year={'2021'} tech={'Laravel, MySQL, Bootstrap, jQuery, Google Charts'} link={'/crypto'}/>
        

                <div className='space'></div>

                <Cards image={tamms} title={'TAMMS'} year={'2020'} tech={'Codeigniter, MySQL, Bootstrap'}  link={'/tamms'}/>
                
        

            </div>

            <div className='space-break'></div>
            <div id="ui-designs" className='text-center'>
            <h4 className='p-3 title-section'> UI DESIGNS</h4>

        
                <Cards image={Baliuag} title={'Baliuag University'} year={'2022'} tech={'Adobe XD'}/>
        

                <div className='space'></div>

        
                <Cards image={GivingTuesday} title={'GivingTuesday'} year={'2021'} tech={'Adobe XD'}/>
        

                <div className='space'></div>

        
                <Cards image={MagisSolutions} title={'MagisSolutions'} year={'2021'} tech={'Adobe XD'}/>
        

                <div className='space'></div>

        </div>
        </motion.div>

        </>
    );
}

export default Home;