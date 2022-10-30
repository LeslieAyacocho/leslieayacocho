import { Navbar } from 'flowbite-react';
import {Link as Link1} from 'react-scroll'
import {Link as Link2} from 'react-router-dom'
import header from './img/header.png'
const Header = () => {
    return ( 
        <>
            <Navbar
            fluid={true}
            className="bg-white2 h-15 lg:h-20 "
            >
                <img
                src={header}
                className=" h-9 lg:h-16"
                alt="Leslie Logo"
                />
            <Navbar.Toggle />
            <Navbar.Collapse>
                
                    <Link1
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={100}
                        className='header-text'
                    >
                    ABOUT                    
                    </Link1>
                    <Link1
                        activeClass="active"
                        to="web-developments"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={100}
                        className='header-text'
                    >
                        WEB DEVELOPMENTS
                    </Link1>
                    <Link1
                        activeClass="active"
                        to="ui-designs"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={100}
                        className='header-text'
                    >
                        UI/UX DESIGNS
                    </Link1>
                    <Link1
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={100}
                        className='header-text'
                    >
                        CONTACT
                    </Link1>

            </Navbar.Collapse>
            </Navbar>
        </>  
    //     <Navbar expand="lg">
    //     {/* <Container> */}
    //     <Navbar.Brand ><img src={header} className="w-50" alt=""/></Navbar.Brand>
    //     {/* <Navbar.Brand className="mx-3">LESLIE AYACOCHO</Navbar.Brand> */}
    //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //         <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
    //         <Nav>
    //         <Link1
    //                     activeClass="active"
    //                     to="contact"
    //                     spy={true}
    //                     smooth={true}
    //                     offset={-70}
    //                     duration={100}
    //                     className='header-text'
    //                 >
    //                     CONTACT
    //                 </Link1>
    //                 <Link1
    //                     activeClass="active"
    //                     to="ui-designs"
    //                     spy={true}
    //                     smooth={true}
    //                     offset={-70}
    //                     duration={100}
    //                     className='header-text'
    //                 >
    //                     UI DESIGNS
    //                 </Link1>
    //                 <Link1
    //                     activeClass="active"
    //                     to="web-developments"
    //                     spy={true}
    //                     smooth={true}
    //                     offset={-70}
    //                     duration={100}
    //                     className='header-text'
    //                 >
    //                     WEB DEVELOPMENTS
    //                 </Link1>
                
    //         </Nav>
    //         </Navbar.Collapse>
    //     {/* </Container> */}
    // </Navbar>
    );
}
export default Header;