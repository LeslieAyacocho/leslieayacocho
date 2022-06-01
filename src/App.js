import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';

import Home from './components/Home'
import CryptoNews from './components/projects/CryptoNews';
import Tamms from './components/projects/Tamms';
import Net from './components/projects/Net'
import Axie from './components/projects/Axie';
function App() {
  return (
    <Router basename="/leslieayacocho/">

    <div className="App">

      <Switch>

      <AnimatePresence>
        <Route path="/" component={Home} exact/>
        <Route path="/crypto" component={CryptoNews} exact/>
        <Route path="/tamms" component={Tamms} exact/>
        <Route path="/net" component={Net} exact/>
        <Route path="/axie-energy-counter" component={Axie} exact/>
      </AnimatePresence>
      </Switch>

    </div>
    </Router>
  
        
  );
}

export default App;

