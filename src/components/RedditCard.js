import React, {useState, useEffect} from "react";
import {useFetchReddit} from '../utils/useFetchReddit'
import '../App.css'

const logo = require('../assets/images/RedditLogo.png')

function RedditCard() {

    const {data} = useFetchReddit()

    return(
        <div>

        {data.map((dd, ndx) => {
            const {score, subreddit_name_prefixed, author, created, title, description, num_comments, url} = dd.data
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
                        <p>{Number.parseFloat(score/1000).toFixed(1)}k</p>
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
                            <h3><a href={url} rel='noreferrer' target='_blank' style={{textAlign:'left'}}>{url}</a></h3>
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