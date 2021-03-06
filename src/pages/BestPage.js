import React from 'react'

import {Navbar, RedditCard, SubReddits} from '../components/index'

function Best() {

    return(
        <section className='home'>
            <Navbar />
            <div className='features'>
                <div className='features-img'>
                    <img src="https://i.ibb.co/NNT5trr/rocket.png" alt="" width='100'/>
                </div>
                <div className='features-main reddit-cards' >
                    <RedditCard page='best'/>
                </div>
                <div className='features-side'>
                    <SubReddits />
                </div>
            </div>
        </section>

    )
}

export default Best