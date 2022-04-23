import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux'

// const urlCard = 'https://www.reddit.com/r/all.json'

export const useFetchReddit = () => {

    const {page} = useSelector((store) => store.page)

    const [data, setData] = useState([])

    // const {page} = Menu
    // console.log(page)
    
    // const urlCard = `https://www.reddit.com/${page}.json`
    const urlCard = (page === 'all' 
                    ? `https://www.reddit.com/r/${page}.json` 
                    : `https://www.reddit.com/${page}.json`)
    const getFetchCard = async () => {

        const resp = await fetch(urlCard)
            if(resp.ok) {
                const data = await resp.json()
                setData(data.data.children)
                return
            }
            throw new Error('Request failed!')
}

    useEffect(() => {
        getFetchCard(urlCard)
    },[urlCard])

    return {data}

}