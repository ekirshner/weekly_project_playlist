import React, { Component } from 'react';

import '../App.css';

import Playlist from './Playlist';
import Navbar from './Navbar';
import PlaylistForm from './PlaylistForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.favoriteClick = this.favoriteClick.bind(this)
    this.handleSongSubmission = this.handleSongSubmission.bind(this)

    this.state = {
      songsArr: [
        {
          name: "Fly Me to the Moon",
          artist: "Frank Sinatra",
          notes: "Great Song",
          favorited: false
        },
        {
          name: "What a Wonderful World",
          artist: "Louis Armstrong",
          notes: "Another Great Song",
          favorited: false
        }
      ]
    };
  }

  favoriteClick(song) {
    console.log('this is favorited')
    console.log(song)
    this.setState({
      songsArr: this.state.songsArr
    })
  }

  handleSongSubmission(event) {
    console.log(event)
    this.state.songsArr.push({
      name: event.name,
      artist: event.artist,
      notes: event.notes,
      favorited: event.favorited,
    });
    console.log(this.state.songsArr)
    this.setState({
      songsArr: this.state.songsArr
    })
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Navbar />
          <h2>Erica's Awesome Playlist Organizer</h2>
        </div>

        <div className="container">
          <PlaylistForm songsArr={this.state.songsArr} handleSongSubmission={(event) => this.handleSongSubmission(event)} />
          <Playlist songsArr={this.state.songsArr} onFavClick={song => this.favoriteClick(song)} />
        </div>
      </div>
    );
  }
}

export default App;

//TODO:
// Move the songsArray to the App.js component. call it with props (songs={this.state.songs}) <-- see above
//do it for playlistForm too. 
//get rid of songsArray from playlistitem
//swap out songsArr.map in playlistitem for the new this.state.songs