import React from 'react';
import Navigation from './navigator';
import logo from '../image/starwars.png'


function Header(){
    return(
      <header className='border-b font-bold p-3 flex justify-between item-center'>
     
        <img src={logo} alt="logo" style={{width:'50px',height:'30px'}}/>
        <span className='font-bold'>Star Wars API</span> 
        <Navigation />
      </header>
    );
}

export default Header