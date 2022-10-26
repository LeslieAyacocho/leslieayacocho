import { Navbar } from 'flowbite-react';
import {Link} from 'react-router-dom'
import header from './img/header.png'
const Header = () => {
    return (
        <Navbar
        fluid={true}
        className="bg-white2 h-15 lg:h-20 "
        >
            <Link to="/"><img src={header} className=" h-9 lg:h-16" alt="Leslie Logo"/></Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
                <Link
                    to="/"
                    className='header-text'
                >
                    HOME
                </Link>
                <Link
                    className='header-text'
                >
                    WORK
                    </Link>
        </Navbar.Collapse>
        </Navbar>
    );
}
export default Header;