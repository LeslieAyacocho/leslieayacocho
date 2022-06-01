import { Navbar } from "react-bootstrap";
import {Link} from 'react-router-dom'
import header from './img/header.png'
const Header = () => {
    return ( 
        <Navbar expand="lg">
        {/* <Container> */}
        <Navbar.Brand ><Link to="/"><img src={header} className="w-50" alt=""/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* </Container> */}

    </Navbar>
    );
}
export default Header;