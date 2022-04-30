import React from 'react'

import {Navbar, RedditCard, SubReddits} from '../components/index'

function Rising() {

    return(
        <section className='home'>
            <Navbar />
            <div className='features'>
                <div className='features-img'>
                    <img src="https://i.ibb.co/pwsPn6K/rising.png" alt="" width='100'/>
                </div>
                <div className='features-main reddit-cards'>
                    <RedditCard />
                </div>
                <div className='features-side'>
                    <SubReddits />
                </div>
            </div>
        </section>

    )
}

export default Rising