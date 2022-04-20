import React from "react";

const logo = require('../assets/images/RedditLogo.png')

function RedditCard() {

    return(
        <section className='reddit-card'>
            <div className='left'>
                <button type='button'
                        className='btn'
                        onClick={() => {alert('ok')}}
                >
                <img src={'https://i.ibb.co/5vq44p3/arrow-up.png'} alt=""/>
                </button>
                <p>votes</p>
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
                    <p>user</p>
                    <p>post</p>
                    <p>time asdjhfakjds  asdkjf </p>
                </div>
                <div className='body'>
                    <h1>Title</h1>
                    <h3>description</h3>
                </div>
                <div className='footer'>
                    <img src={'https://i.ibb.co/HYMP097/comment.png'} alt="" />
                    <p>comments</p>
                    <img src={'https://i.ibb.co/2gjkgTv/share.png'} alt="" />
                    <p>sharing</p>
                </div>
            </div>
        </section>
    )
}

export default RedditCard