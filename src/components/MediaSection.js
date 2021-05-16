import React from 'react'
import MusicSection from './MusicSection';
import MoviesSection from './MoviesSection';
import BooksSection from './BooksSection';


export default function MediaSection() {
    return (

        <div>
            I'm the media section
            <MusicSection/>
            <MoviesSection/>
            <BooksSection/>
        </div>
    )
}

