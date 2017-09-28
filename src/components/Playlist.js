import React, { Component } from 'react';

import { PlaylistItem } from './PlaylistItem';

class Playlist extends Component {

    render() {
        return (
            <div className="playlist">
                <h1>My Playlist</h1>
                <input type="text" placeholder="Search.." value={this.props.searchText}
                    onChange={(event) => this.props.onSearchChange(event)} />
                <PlaylistItem songsArr={this.props.songsArr} onFavClick={this.props.onFavClick} />
            </div>
        );
    };
}

export default Playlist;