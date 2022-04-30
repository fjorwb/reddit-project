import React from 'react'
import { useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'

import {EndpointS} from '../features/pageSlice'

const logo = require('../assets/images/RedditLogo.png')

function Logo() {

    const dispatch = useDispatch()

    return(
        <section className='logo'>
                <div className='img'>
                    <Link to='/'>
                        <img 
                            src={logo} 
                            width='35' 
                            alt='logo' 
                            onClick={() => dispatch(EndpointS(''))} />
                    </Link>
                </div>
                <div className='logo-title'>
                    <Link to='/'>
                        <h2 className='word1' onClick={() => dispatch(EndpointS(''))}>Reddit</h2>
                    </Link>
                    <Link to='/'>
                        <h2 className='word2' onClick={() => dispatch(EndpointS(''))}>minimal</h2>
                    </Link>
                </div>
        </section>
    )
}

export default Logo