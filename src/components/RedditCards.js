import React from "react";

import {RedditCard, SubReddits} from './index'

function RedditCards() {
    return(
        <section className='reddit-cards '>
                <RedditCard/>
                <SubReddits />
        </section>
    )
}

export default RedditCards