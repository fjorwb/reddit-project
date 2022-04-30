import React from 'react'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'

import {EndpointT} from '../features/pageSlice'

import navbarItems from '../assets/others/navbarItems'

import '../App.css'

function Menu() {
    
    const dispatch = useDispatch()

    return (
        <div className='nav-bar'>
            <ul>
                {navbarItems.map((item) => {
                    const {id, img, text, url='/'} = item
                    return (
                        <li key={id} >
                                <Link to={url}>
                                    <button type='text' 
                                            className='btn-menu' 
                                            onClick={() => dispatch(EndpointT({text, id}))}>
                                        <img src={img} width='26' alt={text} title={text} rel="preload" />
                                        <p>{text}</p>
                                    </button>
                                </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Menu