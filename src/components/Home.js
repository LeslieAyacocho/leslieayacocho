
import { Link as Link2} from 'react-scroll'


import Cards from "./Cards.js" 

import ranking from './img/ranking.png'
import axie from './img/axie.png'
import tamms from './img/tamms.png'
import net from './img/net.png'
import Header from './Header.js';
import Baliuag from './img/Baliuag.png' 
import GivingTuesday from './img/GivingTuesday.png' 
import MagisSolutions from './img/MaigsSolutions.png' 
import oats from './img/oats/home.PNG'
import { motion } from "framer-motion"
import {Row, Col} from 'react-bootstrap'
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

                <Cards image={oats} title={'Online Archiving Thesis System'} year={'2022'} tech={'MERN Stack (MongoDB, Express, ReactJS, Node.js)'}  link={'/development/oats'}/>

                
    
                <div className='space'></div>

                <Cards image={axie} title={'Axie Energy Counter'} year={'2021'} tech={'Vue, Bootstrap Vue'}  link={'/development/axie-energy-counter'}/>

                
    
                <div className='space'></div>

        
                <Cards image={net} title={'NET'} year={'2021'} tech={'Laravel, MySQL, Bootstrap, jQuery, Google Charts'}  link={'/development/net'}/>
        

                <div className='space'></div>

        
                <Cards image={ranking} title={'CryptoNews'} year={'2021'} tech={'Laravel, MySQL, Bootstrap, jQuery, Google Charts'} link={'/development/crypto'}/>
        

                <div className='space'></div>

                <Cards image={tamms} title={'TAMMS'} year={'2020'} tech={'Codeigniter, MySQL, Bootstrap'}  link={'/development/tamms'}/>
                
        

            </div>

            <div className='space-break'></div>
            <div id="ui-designs" className='text-center'>
            <h4 className='p-3 title-section'> UI DESIGNS</h4>

        
                <Cards image={Baliuag} title={'Baliuag University'} year={'2022'} tech={'Figma'} link={'/design/baliuag-university'}/>
        

                <div className='space'></div>

        
                <Cards image={GivingTuesday} title={'GivingTuesday'} year={'2021'} tech={'Figma'} link={'/design/giving-tuesday'}/>
        

                <div className='space'></div>

        
                <Cards image={MagisSolutions} title={'MagisSolutions'} year={'2021'} tech={'Figma'} link={'/design/magis-solutions'}/>
        

                <div className='space'></div>

            </div>
            <div className='space-break'></div>
            <div id="contact" className="contact-page">
                <div className="text-body-home">
                    <h4>Contact</h4>
                </div>
            <Row>
                <Col className='no-border'><i class="fas fa-envelope"></i> Email: lesliejayne.ayacocho@gmail.com</Col>
                <Col><i class="fas fa-phone-alt"></i> Contact no: +639669213916 </Col>
                <Col><i class="fab fa-linkedin"></i> LinkedIn: <a href="https://linkedin.com/in/leslie-ayacocho">linkedin.com/in/leslie-ayacocho</a> </Col>
                <Col><i class="fab fa-github"></i> Github: <a href="https://github.com/LeslieAyacocho/">github.com/LeslieAyacocho/</a> </Col>
            </Row>
            </div>
        </motion.div>

        </>
    );
}

export default Home;