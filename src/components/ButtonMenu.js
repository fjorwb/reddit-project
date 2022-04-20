import React from 'react'

function ButtonMenu() {
    return(
        <button type='button'
                className='btn-menu'
        >
            <img src={img} width='26' alt="logo"   />
            <p >{text}</p>
            <Link to='/top' />
        </button>
    )
}

export default ButtonMenu