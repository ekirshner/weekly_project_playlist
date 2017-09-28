import React, { Component } from 'react';

import '../App.css';

import Playlist from './Playlist';
import Navbar from './Navbar';
import PlaylistForm from './PlaylistForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.favoriteClick = this.favoriteClick.bind(this);
    this.handleSongSubmission = this.handleSongSubmission.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.searchSongs = this.searchSongs.bind(this);

    let songsArr = [
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
      ];

    this.state = {
      searchText: '',
      songsArr: songsArr,  
      searchedSongs: songsArr    
    };
  }

  
  favoriteClick(song) {
    if(song.favorited === true) {
      song.favorited = false;
    } else {
      song.favorited = true;
    }

    this.setState({
      songsArr: this.state.songsArr
    })
  }

  handleSongSubmission(event) {
    this.state.songsArr.push({
      name: event.name,
      artist: event.artist,
      notes: event.notes,
      favorited: event.favorited,
    })
   
    this.setState({
      searchedSongs: this.state.songsArr
    })
  }

  onSearchChange(event) {
        this.setState({
            searchText: event.target.value
        }, () => {
            this.searchSongs()
        })
    }

  searchSongs() {
    let songs = this.state.songsArr;
    let searchText = this.state.searchText;

    songs = songs.filter(function (song) {
      return song.name.indexOf(searchText) !== -1;
    })

    this.setState({
      searchedSongs: songs
    });
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
          <Playlist songsArr={this.state.searchedSongs} 
            onFavClick={song => this.favoriteClick(song)} 
            onSearchChange={text => this.onSearchChange(text)} 
            searchText={this.state.searchText} /> 
        </div>
      </div>
    );
  }
}

export default App;