import React from "react";

import {RedditCard, SubReddits} from './index'

function RedditCards() {
    return(
        <section className='reddit-cards container'>
            <div style={{width: '63%', marginRight: '1rem'}} >
                <RedditCard/>
            </div >
            <div style={{width: '35%'}} >
                <SubReddits />
            </div>
        </section>
    )
}

export default RedditCards