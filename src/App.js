import React from 'react';
import { BrowserRouter as Router ,Routes , Route} from 'react-router-dom';
import  Header  from './components/header';
import Watchlist from './components/watchlist';
import Watched  from './components/watched';
import Add from './components/add';
import './App.css';
import './lib/font-awesome/css/all.min.css'

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
    <Router>
      <Header/>

       <Routes>
        <Route exact path='/' element={<Watchlist/>} />

        <Route exact path='/watched' element={<Watched/>} />
        <Route exact path='/add' element={<Add/>} />
      </Routes> 
    </Router>
    </GlobalProvider>
  )
}

export default App;
