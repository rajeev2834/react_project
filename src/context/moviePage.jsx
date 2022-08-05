import React, { Component } from 'react';
import MovieList from './movieList';
import UserContext from './useContext';

class MoviePage extends Component {
    state = {currentUser: {name: "Rajeev"}};

    render() { 
        return ( 
            <UserContext.Provider value={this.state.currentUser}>
                <div>
                    <h1>Movie Page</h1>
                    <MovieList/>
                </div>
            </UserContext.Provider>
         );
    }
}
 
export default MoviePage;