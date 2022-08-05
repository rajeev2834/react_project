import React, { Component } from 'react';
import MovieRow from './movieRow';
import UserContext from './useContext';

class MovieList extends Component {
    
    componentDidMount() {
        console.log("Context", this.context);
    }

    render() {
        return (
            <UserContext.Consumer>
            {userContext => <div>Movie List {userContext.name} {<MovieRow/>}</div>}
            </UserContext.Consumer>
        );
    }
}

MovieList.contextType = UserContext;

export default MovieList;