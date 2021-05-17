import React from 'react'
import MusicSection from './MusicSection';
import MoviesSection from './MoviesSection';
import BooksSection from './BooksSection';


export default function MediaSection({media}) {
    return (

        <div>
            <MusicSection media={media}/>
        </div>
    )
}

