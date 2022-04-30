import React from 'react'
import {useSelector} from 'react-redux'
import {Navbar, RedditCard, SubReddits} from '../components/index'
import navbarItems from '../assets/others/navbarItems'

function Features() {
    const {page, idp} = useSelector((store) => store.page)

    console.log(page, idp);

    const pageData = navbarItems.filter((item) => item.id === idp)
    console.log(pageData)
    const {id, img, url} = pageData[0]
    console.log(id, img, url)

    return(
        <section className='home'>
            <Navbar />
            <div className='features'>
                <div className='features-img'>
                    <img src={img} alt={page} width='100'/>
                </div>
                <div className='features-main reddit-cards' >
                    <RedditCard page={page}/>
                </div>
                <div className='features-side'>
                    <SubReddits />
                </div>
            </div>
        </section>

    )
}

export default Features