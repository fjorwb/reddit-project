import React from 'react'
import navbarItems from '../assets/others/navbarItems'

// console.log(navbarItems)

function NavBar() {
    

    return(
        navbarItems.map((item) => {
            const {id, img, text} = item
            console.log(id, img, text)
            return(
                <nav className='nav-bar'>
                    <ul>
                        <li >
                            <div className='item' key={id}>
                                <img src={img} width='26' alt="logo"   />
                                <p >{text}</p>
                            </div>
                        </li>
                    </ul>
                </nav>
            )
        })
    )
}

export default NavBar