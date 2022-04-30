import React from 'react'

import '../App.css';

import {Logo, Menu, SearchBar} from './index'

function NavBar() {
    
    return(
        <div className='NavBar'>
            <Logo />
            <SearchBar />
            <Menu />
        </div>
    )
}

export default NavBar