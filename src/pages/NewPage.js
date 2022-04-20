import React from 'react'

import {Navbar, RedditCard, SubReddits} from '../components/index'

function New() {

    return(
        <section className='home'>
            <Navbar />
            <div className='features'>
                <div className='features-img'>
                    <img src="https://i.ibb.co/fr9TWNn/star.png" alt="" width='100'/>
                </div>
                <div className='features-main reddit-cards'>
                    <RedditCard />
                </div>
                <div className='features-side'>
                    <SubReddits />
                </div>
            </div>
            <h1>New</h1>
        </section>

    )
}

export default New