import React, { Component } from 'react';

class Navbar extends Component {
    
    render() {
        return (
            <div className="navbar">
                <a href="localhost:3000">Sign Out</a>
                <a href="localhost:3000">My Acount</a>
                <a href="localhost:3000">Search</a>
                <a href='http://www.youtube.com'>Home</a>
            </div>
        );
    }
};

export default Navbar;