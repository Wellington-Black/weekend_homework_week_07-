import React ,{useState} from 'react';
import MediaSection from '../components/MediaSection';
import SearchBar from '../components/SearchBar';


export default function MediaFinder() {
    return (
        <div>
            <SearchBar />
            <MediaSection />
        </div>
    )
}

