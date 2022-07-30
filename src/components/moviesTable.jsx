import React, { Component } from 'react';
import Like from './common/like';
import Table from './common/table';
import { Link } from 'react-router-dom';

class MoviesTable extends Component {

    column = [
        {path: 'title', 
        label: 'Title',
        content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>},
        {path: 'genre.name', label: 'Genre'},
        {path: 'numberInStock', label: 'Stock'},
        {path: 'dailyRentalRate', label: 'Rate'},
        {key: 'like', label: 'Like', 
            content : (movie) => 
            (<Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />)},
        {key: 'delete', label: 'Delete', 
        content: (movie) => ( 
        <button className="btn btn-danger btn-sm" 
            onClick={() => this.props.onDelete(movie)}>
            Delete</button>)}
    ];

    render() { 
        const {movies, onSort, sortColumn} = this.props;
        return (
           <Table 
            column= {this.column} 
            data = {movies} 
            onSort={onSort} 
            sortColumn = { sortColumn }
           />
        );
    }
}
 
export default MoviesTable;