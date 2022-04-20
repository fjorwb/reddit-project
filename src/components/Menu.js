import React from 'react'
import {Link} from 'react-router-dom'

import navbarItems from '../assets/others/navbarItems'

import '../App.css';

function NavBar() {
    

    return(
        navbarItems.map((item) => {
            const {id, img, text} = item
            return(
                <nav className='nav-bar'>
                    <ul>
                        <li >
                            <div className='item' key={id}>
                                <ButtonMenu />
                            </div>
                        </li>
                    </ul>
                </nav>
            )
        })
    )
}

export default NavBar