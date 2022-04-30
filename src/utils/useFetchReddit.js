import { useState, useEffect } from 'react';
import {useSelector} from 'react-redux'

export const useFetchReddit = () => {

    const {page, search} = useSelector((store) => store.page)

    const [data, setData] = useState([])

    const urlCard = (search !== ''
                    ? `https://www.reddit.com/search.json?q=${search}`
                    : page === 'best' 
                    ? `https://www.reddit.com/${page}.json` 
                    : `https://www.reddit.com/r/all/${page}.json`)
        
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[urlCard])

    return {data}
}