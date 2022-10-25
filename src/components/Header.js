import { Navbar } from 'flowbite-react';
import {Link} from 'react-scroll'
import header from './img/header.png'
const Header = () => {
    return ( 
        <>
            <Navbar
            fluid={true}
            className="bg-white2 h-20 "
            >
                <img
                src={header}
                className=" h-16 sm:h-9 "
                alt="Leslie Logo"
                />
            <Navbar.Toggle />
            <Navbar.Collapse>
                
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={100}
                        className='header-text'
                    >
                        CONTACT
                    </Link>
                    <Link
                        activeClass="active"
                        to="ui-designs"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={100}
                        className='header-text'
                    >
                        UI DESIGNS
                    </Link>
                    <Link
                        activeClass="active"
                        to="web-developments"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={100}
                        className='header-text'
                    >
                        WEB DEVELOPMENTS
                    </Link>
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
    //         <Link
    //                     activeClass="active"
    //                     to="contact"
    //                     spy={true}
    //                     smooth={true}
    //                     offset={-70}
    //                     duration={100}
    //                     className='header-text'
    //                 >
    //                     CONTACT
    //                 </Link>
    //                 <Link
    //                     activeClass="active"
    //                     to="ui-designs"
    //                     spy={true}
    //                     smooth={true}
    //                     offset={-70}
    //                     duration={100}
    //                     className='header-text'
    //                 >
    //                     UI DESIGNS
    //                 </Link>
    //                 <Link
    //                     activeClass="active"
    //                     to="web-developments"
    //                     spy={true}
    //                     smooth={true}
    //                     offset={-70}
    //                     duration={100}
    //                     className='header-text'
    //                 >
    //                     WEB DEVELOPMENTS
    //                 </Link>
                
    //         </Nav>
    //         </Navbar.Collapse>
    //     {/* </Container> */}
    // </Navbar>
    );
}
export default Header;