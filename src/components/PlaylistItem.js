import React, { Component } from 'react';


class PlaylistItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            favorited: false,
        };
    }


    handleFavorite(ev) {

        this.setState({ 
            favorited: !this.state.favorited 
        });
        this.props.onFavClick(this.state.favorited);
    }

    render() {
        let index = 0;
        let buttonText = "Favorite Me!"

        const songs = this.props.songsArr.map(song => {
            index += 1;

            return (
                <div key={index} className="playlistItems">
                    <p>Song Name:  {song.name} </p>
                    <p>Artist:  {song.artist} </p>
                    <p>Notes:  {song.notes} </p>
                    <button onClick={event => this.handleFavorite(event)} value={this.state.favorited}>{buttonText}</button>
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