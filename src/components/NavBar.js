import React from 'react'

import '../App.css';

import {Menu, SearchBar} from './index'

function NavBar() {
    
    return(
        <div className='NavBar'>
            <SearchBar />
            <Menu />
        </div>
    )
}

export default NavBar