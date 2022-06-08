import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';

import Home from './components/Home'
import CryptoNews from './components/projects/CryptoNews';
import Tamms from './components/projects/Tamms';
import Net from './components/projects/Net'
import Axie from './components/projects/Axie';
import Oats from './components/projects/Oats'
import Baliuag from './components/projects/Baliuag';
import GivingTuesday from './components/projects/GivingTuesday';
import MagisSolutions from './components/projects/MagisSolutions';
function App() {
  return (
    <Router basename="/leslieayacocho/">

    <div className="App">

      <Switch>

      <AnimatePresence>
        <Route path="/" component={Home} exact/>
        <Route path="/development/crypto" component={CryptoNews} exact/>
        <Route path="/development/tamms" component={Tamms} exact/>
        <Route path="/development/net" component={Net} exact/>
        <Route path="/development/axie-energy-counter" component={Axie} exact/>
        <Route path="/development/oats" component={Oats} exact/>
        <Route path="/design/baliuag-university" component={Baliuag} exact/>
        <Route path="/design/giving-tuesday" component={GivingTuesday} exact/>
        <Route path="/design/magis-solutions" component={MagisSolutions} exact/>
      </AnimatePresence>
      </Switch>

    </div>
    </Router>
  
        
  );
}

export default App;

