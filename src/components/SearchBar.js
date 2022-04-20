import React from 'react'

const logo = require('../assets/images/RedditLogo.png')

function SearchBar() {
    return(
        <section className='header'>
            <div className='logo'>
                <div className='img'>
                    <img src={logo} width='35' alt='logo' />
                </div>
                <div className='logo-title'>
                    <h2 className='word1'>Reddit</h2>
                    <h2 className='word2'>minimal</h2>
                </div>
            </div>
            <div className='search-bar'>
                <input type="text" placeholder='Search' />
            </div>
        </section>
    )
}

export default SearchBar