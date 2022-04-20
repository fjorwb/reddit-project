import React from 'react'

const logo = require('../assets/images/RedditLogo.png')


function SubReddits() {
    return (
        <section className='subreddit-card'>
            <div className='img'>
                <img src={logo} alt="" />
            </div>
            <p>r/subredit</p>
            <button type='button'>join</button>
        </section>
    )
}

export default SubReddits