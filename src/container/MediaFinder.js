import React ,{useState} from 'react';
import MediaSection from '../components/MediaSection';
import SearchBar from '../components/SearchBar';


export default function MediaFinder() {

    const [media, setMedia] = useState([])

   

    return (
        <div>
            <h1>🎧 Music Finder 🎧</h1>
            <SearchBar setMedia = {setMedia}/>
            <MediaSection media = {media}/>
           
        </div>
    )
}

