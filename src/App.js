import './App.css'
import { originals,action } from './urls';
import React from 'react'
import Navbar from './Components/Navbar/navBar'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className='App'>
        <Navbar/>
        <Banner/>
        <RowPost url={originals} title='Netflix Originals'/>
        <RowPost url={action} title='Action' isSmall/>
    </div>
  );
}

export default App;
