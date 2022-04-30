import React from "react";

import {RedditCard, SubReddits} from './index'

function RedditCards() {
    return(
        <section className='reddit-cards '>
            {/* <div className='rediit-card'> */}
                <RedditCard/>
            {/* </div > */}
            {/* <div className='subreddit'> */}
                <SubReddits />
            {/* </div> */}
        </section>
    )
}

export default RedditCards