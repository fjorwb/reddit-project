import React,{useState, useEffect} from 'react'

import '../App.css'

function Fetch() {

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
    
    console.log(ddd);


    return (
        <div>
            {ddd.map((dd, ndx) => {
                const {ups, subreddit_name_prefixed, author, created, title, num_comments, url} = dd.data
                return(
                    <div key={ndx} className='fetch'>
                        <p>{ups}</p>
                        <p>{subreddit_name_prefixed}</p>
                        <p>{author}</p>
                        <p>{created}</p>
                        <p>{title}</p>
                        <p>{author}</p>
                        <p>{num_comments}</p>
                        <a href={url} rel='noreferrer' target='_blank'>{url}</a>
                        <hr/>

                    </div>
                )
            })}
        </div>
    )

}

export default Fetch