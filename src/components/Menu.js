import React from 'react'
import {Link} from 'react-router-dom'

import navbarItems from '../assets/others/navbarItems'
import links from '../assets/others/links'

import '../App.css'

function NavBar() {

    let lnk = []

    return (
        <div className='nav-bar'>
            <ul>
                {navbarItems.map((item) => {
                    const {id, img, text} = item
                    lnk=links.find(lnk => lnk.id === id)
                    return (
                        <li key={id} >
                                <Link to={lnk.url}>
                                    <img src={img} width='26' alt={text} title={text}   />
                                    <div>{text}</div>
                                </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default NavBar