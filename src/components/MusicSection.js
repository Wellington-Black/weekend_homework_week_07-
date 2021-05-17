import React from 'react';
import Song from './Song';

export default function MusicSection({media}) {




    return (
        <div>
            <h3>Results:</h3>
            <Song media={media} />
        </div>
    )
}
