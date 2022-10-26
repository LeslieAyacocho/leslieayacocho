
import { Link as Link2} from 'react-scroll'


import Cards from "./Cards.js" 

import { Card } from 'flowbite-react'

import ranking from './img/crypto/cryptonews.png'
import axie from './img/axie/Axie.png'
import tamms from './img/tamms/TAMMS.png'
import net from './img/net/NET.png'
import Header from './Header.js';
import Baliuag from './img/Baliuag.png' 
import GivingTuesday from './img/GivingTuesday.png' 
import MagisSolutions from './img/MaigsSolutions.png' 
import oats from './img/oats/oats.png'
import { motion } from "framer-motion"
// import {Row, Col} from 'react-bootstrap'
const Home = () => {
    return (
        <>
        <motion.div 
        // initial={{width: 0}}
        animate={{width: "100%"}}
        exit={{x: "100%"}}
        >
        <div>
        <Header />
        </div>

        <div class="name flex items-center justify-center">
            <span>
                <h1 className='text-4xl md:text-5xl g:text-5xl flex items-center justify-center'>LESLIE AYACOCHO</h1>
                <p className='flex items-center justify-center'>Web Developer & Designer</p>
            </span>
        </div>


        <div className='arrow flex items-center justify-center'>
        <span>
            <Link2
                activeClass="active"
                    to="web-developments"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={100}
            >
                <i class="text-2xl fas fa-angle-down"></i>
            </Link2>
        </span>
        </div>


    <div id="web-developments" className='text-center'>
            <h4 className='title-section-top'> WEB DEVELOPMENTS</h4>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-0'>
                <Cards image={oats} title={'Online Archiving Thesis System'} year={'2022'} tech={'MERN Stack (MongoDB, Express, ReactJS, Node.js)'}  link={'/development/oats'}/>
                {/* <Cards image={axie} title={'Axie Energy Counter'} year={'2021'} tech={'Vue, Bootstrap Vue'}  link={'/development/axie-energy-counter'}/> */}
                <Cards image={net} title={'Natural Event Tracker'} year={'2021'} tech={'Laravel, MySQL, Bootstrap, jQuery, Google Charts'}  link={'/development/net'}/>
                <Cards image={ranking} title={'CryptoNews'} year={'2021'} tech={'Laravel, MySQL, Bootstrap, jQuery, Google Charts'} link={'/development/crypto'}/>
                <Cards image={tamms} title={'Tourism Analytics for Metro Manila System'} year={'2020'} tech={'Codeigniter, MySQL, Bootstrap'}  link={'/development/tamms'}/>
            </div>
    </div>

            <div className='space'></div>
            <div id="ui-designs" className='text-center'>
            <h4 className='title-section-top'> UI DESIGNS</h4>        
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-0'>
                <Cards image={Baliuag} title={'Baliuag University'} year={'2022'} tech={'Figma'} link={'/design/baliuag-university'}/>
                <Cards image={GivingTuesday} title={'GivingTuesday'} year={'2021'} tech={'Figma'} link={'/design/giving-tuesday'}/>
                <Cards image={MagisSolutions} title={'MagisSolutions'} year={'2021'} tech={'Figma'} link={'/design/magis-solutions'}/>
            </div>
            </div>

            {/* <div className='space-break'></div>
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
            </div> */}
        </motion.div>  

        </>
    );
}

export default Home;