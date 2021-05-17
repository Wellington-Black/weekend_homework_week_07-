import React, {useState, useEffect} from 'react';

export default function SearchBar({ setMedia }) {

    const [query, setQuery] = useState ('')
    // const [media, setMedia] = useState ([]);


    const handleQueryChange = (event) => {
        setQuery(event.target.value)
    }

    const getMedia = function () {

        fetch(`https://itunes.apple.com/search?term=${query}&media=music&limit=16`)
        .then(results => results.json())
        .then(media => setMedia(media.results))
        // console.log(media)
        setQuery("");

    }
    

    return (
        <>
            <div>
                
                <input
                type="text" 
                placeholder="Search for media..."
                value={query}
                onChange={handleQueryChange}
                ></input>
                <button className="btn" onClick={()=> {getMedia()}}>Search</button>
            </div>
        </>
    )
}
