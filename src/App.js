import './App.css';

import { Link as Link2} from 'react-scroll'

import { Container } from 'react-bootstrap';

import Header from "./components/Header";
import Cards from "./components/Cards.js" 

import ranking from './components/img/ranking.png'
import axie from './components/img/axie.png'
import tamms from './components/img/tamms.png'
import net from './components/img/net.png'

import Baliuag from './components/img/Baliuag.png' 
import GivingTuesday from './components/img/GivingTuesday.png' 
import MagisSolutions from './components/img/MaigsSolutions.png' 

function App() {
  return (
    <div className="App">
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

        <Container className='w-100'>
          <Cards image={tamms} title={'TAMMS'} year={'2020'} tech={'Codeigniter, MySQL, Bootstrap'}/>
        </Container>

          <div className='space'></div>

        <Container className='w-100'>
          <Cards image={ranking} title={'CryptoNews'} year={'2021'} tech={'Laravel, Bootstrap, jQuery, Google Chart API'}/>
        </Container>

          <div className='space'></div>

        <Container className='w-100'>
          <Cards image={net} title={'Axie Energy Counter'} year={'2021'} tech={'Vue, Bootstrap Vue'}/>
        </Container>

          <div className='space'></div>

        <Container className='w-100'>
          <Cards image={axie} title={'NET'} year={'2021'} tech={'Codeigniter, MySQL, Bootstrap'}/>
        </Container>

      </div>

      <div className='space-break'></div>
      <div id="ui-designs" className='text-center'>
        <h4 className='p-3 title-section'> UI DESIGNS</h4>

        <Container className='w-100'>
          <Cards image={Baliuag} title={'Baliuag University'} year={'2022'} tech={'Adobe XD'}/>
        </Container>

          <div className='space'></div>

        <Container className='w-100'>
          <Cards image={GivingTuesday} title={'GivingTuesday'} year={'2021'} tech={'Adobe XD'}/>
        </Container>

          <div className='space'></div>

        <Container className='w-100'>
          <Cards image={MagisSolutions} title={'MagisSolutions'} year={'2021'} tech={'Adobe XD'}/>
        </Container>

          <div className='space'></div>

      </div>
      

    </div>
  
        
  );
}

export default App;

