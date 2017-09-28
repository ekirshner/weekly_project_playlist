import React, { Component } from 'react';


class PlaylistItem extends Component {

    render() {
        const songs = this.props.songsArr.map((song, index) => {
            let buttonText = "Favorite Me!"

            if(song.favorited) {
                buttonText = "Un-Favorite Me";
            }

            return (
                <div key={index} className="playlistItems">
                    <p><span>Song Name:</span>   {song.name} </p>
                    <p><span>Artist:</span>   {song.artist} </p>
                    <p><span>Notes:</span>   {song.notes} </p>
                    <button onClick={() => this.props.onFavClick(song)}> {buttonText} </button>
                </div>
            )
        })

        return (
            <div className="allsongs">
                {songs}
            </div>
        )
    }
}


export { PlaylistItem };

//try toggling the button words with this:
// {{backgroundColor: this.state.color ? this.state.color : "red"}}