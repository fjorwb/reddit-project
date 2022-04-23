import React from 'react'

import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

import {Endpoint} from '../features/pageSlice'



import navbarItems from '../assets/others/navbarItems'
import links from '../assets/others/links'

import '../App.css'

function Menu() {
    // const {page} = useSelector(store => store.page)
    const dispatch = useDispatch()

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
                                    <button type='text' 
                                            className='btn-menu' 
                                            onClick={() => dispatch(Endpoint(text.toLowerCase()))}>
                                        <img src={img} width='26' alt={text} title={text}   />
                                        <div>{text}</div>
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