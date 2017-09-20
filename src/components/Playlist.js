import React, { Component } from 'react';

import { PlaylistItem } from './PlaylistItem';

class Playlist extends Component {

    render() {
        // const songsArr = this.props.songsArr;

        // const songList = songs.map(song => {
        //     return <li>{song.name}</li>;
        // });
        console.log(this.props.songsArr)
        return (
            <div className="playlist">
                <h1>My Playlist</h1>
                {/* <ul>
                    {songList}
                </ul> */}
                <PlaylistItem songsArr={this.props.songsArr} onFavClick={this.props.onFavClick} />
            </div>
        )
    }
}

export default Playlist;