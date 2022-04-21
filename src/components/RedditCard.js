import React, {useState, useEffect} from "react";

import '../App.css'

const logo = require('../assets/images/RedditLogo.png')

function RedditCard() {

    const [ddd, setDdd] = useState([])
    const [url, setUrl] = useState('https://www.reddit.com/r/popular.json')

    const getFetch = async () => {
        const resp = await fetch(url)
        if(resp.ok) {
            const data = await resp.json()
            setDdd(data.data.children)
            return
        }
        throw new Error('Request failed!')
    }

    useEffect(() => {
        getFetch(url)
    },[url])

    return(
        <div>

        {ddd.map((dd, ndx) => {
            const {ups, subreddit_name_prefixed, author, created, title, num_comments, url} = dd.data
                const time = Math.floor((Date.now() - (created * 1000)) / (60*60*1000))

            return(
                <section className='reddit-card' key={ndx}>
                    <div className='left'>
                        <button type='button'
                                className='btn'
                                onClick={() => {alert('ok')}}
                        >
                        <img src={'https://i.ibb.co/5vq44p3/arrow-up.png'} alt=""/>
                        </button>
                        <p>{Number.parseFloat(ups/1000).toFixed(1)}k</p>
                        <button type='button'
                                className='btn'
                                onClick={() => {alert('ok')}}
                                >
                        <img src={'https://i.ibb.co/rftxRnm/arrow-down.png'} alt=""/>
                        </button>
                    </div>
                    <div className='right'>
                        <div className='header'>
                            <img src={logo} alt="" />
                            <p style={{fontWeight:'700'}}>{subreddit_name_prefixed}</p>
                            <p style={{color:'lightslategrey'}}>Posted by {author}</p>
                            <p>{time} hours ago</p>
                        </div>
                        <div className='body'>
                            <h1>{title}</h1>
                            <h3>{title}</h3>
                        </div>
                        <div className='footer'>
                            <img src={'https://i.ibb.co/HYMP097/comment.png'} alt="" />
                            <p>{num_comments}</p>
                            <img src={'https://i.ibb.co/2gjkgTv/share.png'} alt="" />
                            <p>sharing</p>
                        </div>
                    </div>
                </section>
            )
        }
        )
    }
    </div>
    )
}

export default RedditCard