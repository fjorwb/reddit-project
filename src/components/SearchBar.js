import React,{useState} from 'react'
import { useDispatch } from 'react-redux'

import {EndpointS} from '../features/pageSlice'


function SearchBar() {
    const [txt, setTxt] = useState('')

    // const {page, search} = useSelector((store) => store.page)


    const dispatch = useDispatch()

    function handleChange(e) {
        e.preventDefault()
        setTxt(e.target.value)
    }

    const searchimg = 'https://i.ibb.co/Y8v6ZGJ/search.png'

    return(
        <div className='search-bar'>
            <input 
                type="search" 
                name= 'q'
                placeholder='Search'
                onChange={handleChange}
            />
            <button 
                type='text'
                className='btn-search'
                onClick={() => {dispatch(EndpointS(txt))}}
                >
                    <img src={searchimg} alt='search' title='search' />
            </button>
        </div>
    )
}

export default SearchBar