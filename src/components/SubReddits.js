import React, {useState, useEffect} from "react";

import '../App.css'

const logo = require('../assets/images/RedditLogo.png')

function SubReddits() {

    const [dataSubreddit, setdataSubreddit] = useState([])
    const urlSubreddit = 'https://www.reddit.com/subreddits.json'

    const getFetchSubreddit = async () => {
        const resp = await fetch(urlSubreddit)
        if(resp.ok) {
            const data = await resp.json()
            setdataSubreddit(data.data.children)
            return
        }
        throw new Error('Request failed!')
    }

    useEffect(() => {
        getFetchSubreddit(urlSubreddit)
    },[urlSubreddit])

    return (
        <div>

        {dataSubreddit.map((ds, ndx) => {
            const {icon_img, display_name_prefixed, url} = ds.data

            return(
                <section className='subreddit-card'  key={ndx}>
                    <div className='img'>
                        {icon_img ? <img src={icon_img} alt="icon"/> : <img src={logo} alt=""/> }
                    </div>
                    <div className='subreddit'>
                        <p>r/{display_name_prefixed}</p>
                    </div>
                    <div className='btn-subreddit'>
                        <p ><a href={`https://www.reddit.com/${url}`} rel='noreferrer' target='_blank'>GO</a></p>
                    </div>
                </section>
            )

        })}
        </div>
    )
}

export default SubReddits