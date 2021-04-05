import React from 'react'

export default function (props) {
    return(
        <section>
            <h4>Welcome to</h4>
            <h1 className="title">RPG Soundscape Soundboard</h1>
            <section style={{display: 'inline'}}>I've gathered here</section> <section style={{color: 'white', backgroundColor: "#0A1B2A", display: 'inline'}}>atmospheric music</section> and <section  style={{color: 'white', backgroundColor:  "#2A0A12", display: 'inline'}}>soundscapes</section><section style={{display: 'inline'}}> for common fantasy environments</section>
            <p>Use the pin button to pin the widget to keep it playing while you find the song for the next environment.</p>
            <p>You must have a Spotify subscription to use the widgets fully, though you can also open the Spotify link from the widget.</p>
            <p>I do not own any of these songs or playlists, this site only links to them. All content is owned by their respective creators and monetized through Spotify.</p>
        </section>
    )
}