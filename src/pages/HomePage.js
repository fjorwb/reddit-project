import React from 'react'

import '../App.css';

import {Navbar, RedditCards} from '../components/index'

function Home() {
    return(
        <section className='home'>
            <Navbar />
            <RedditCards />
        </section>
    )
}

export default Home