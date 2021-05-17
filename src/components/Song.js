import React from 'react'

export default function Song({media}) {

    const song = media.map((mediaItem, index) => {

        return <div key={mediaItem.trackId}>
            <ul>
                {/* <li><h3>{mediaItem.artistName}</h3></li>
                <li><h4>{mediaItem.trackName}</h4></li>
                <li><img src={mediaItem.artworkUrl100}></img></li> */}
            </ul>
            <div className="col s4 m4 l3">
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={mediaItem.artworkUrl100}/>
                    </div>
                    <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{mediaItem.artistName}<i className="material-icons right">{mediaItem.trackName}</i></span>
                    </div>
                    <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{mediaItem.collectionName}<i className="material-icons right">close</i>
                    <audio controls>
                        <source src={mediaItem.previewUrl} type="audio/ogg"/>
                        <source src="horse.mp3" type="audio/mpeg"/>
                        Your browser does not support the audio element.
                        </audio>
                    </span>
                    <p></p>
                </div>
            </div>
  </div>
        </div>
    })
    
        
    
    console.log(song[0])
    return (
        <div>
           {song}
        </div>
    )
}
