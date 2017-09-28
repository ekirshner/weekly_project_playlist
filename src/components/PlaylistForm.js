import React, { Component } from 'react';

class PlaylistForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            artist: '',
            notes: '',
            favorited: false,
        };
    }


    updateSong(event) {
        this.setState({
            name: event.target.value,
        });
    }

    updateArtist(event) {
        this.setState({
            artist: event.target.value,
        });
    }

    updateNotes(event) {
        this.setState({
            notes: event.target.value,
        });
    }

    submitSong(event) {
        this.props.handleSongSubmission(this.state);
    }

    
    render() {
        return (
            <div className="input-box-add-song">
                <h1>Add your favorite song</h1>
                <input onChange={event => this.updateSong(event)} type="text" name="name" value={this.state.name} placeholder="Song Name" />
                <input onChange={event => this.updateArtist(event)} type="text" name="artist" value={this.state.artist} placeholder="Artist" />
                <input onChange={event => this.updateNotes(event)} type="text" name="notes" value={this.state.notes} placeholder="Notes" />
                <input className="addButton" type="submit" onClick = {event => this.submitSong(event)} name="submitNewSong" value="Add Song to List" />
            </div>
        );

    }


}

export default PlaylistForm;