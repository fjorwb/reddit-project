import React from 'react'
import {Link} from 'react-router-dom'

import navbarItems from '../assets/others/navbarItems'
import links from '../assets/others/links'

import '../App.css'


function ButtonMenu() {
    let link = []

    return (
        <div className='nav-bar'>
            <ul>
                {navbarItems.map((item) => {
                    const {id, img, text} = item
                    link=links.find(lnk => lnk.id === id)
                    console.log(link.url)
                    return (
                        <li className='item' key={id}>
                            <img src={img} width='26' alt="logo"   />
                            <p >{text}</p>
                            <Link to={link.url}></Link>
                            {/* <button type='button' className='btn-menu' >
                                <img src={img} width='26' alt="logo"   />
                                <p >{text}</p>
                                <Link to={link.url}></Link>
                            </button> */}
                        </li>
                    )
                })}
            </ul>
        </div>

    )
}

export default ButtonMenu