import React, { Component } from 'react';
import {toast} from 'react-toastify';
import { getMovies, deleteMovie } from '../services/movieService';
import Pagination from './common/pagination';
import { Paginate } from '../utils/paginate';
import ListGroup from './common/listGroup';
import {getGenres } from '../services/genreService';
import MoviesTable from './moviesTable';
import SearchBox from './common/searchBox';
import _ from 'lodash';

import {Link} from 'react-router-dom';

class Movies extends Component{
    state = {
        movies: [],
        pageSize: 4,
        currentPage: 1,
        genres : [],
        selectedGenre: null,
        searchQuery: "",
        sortColumn: {path: 'title', order: 'asc'},
    }

    async componentDidMount(){
        const {data} = await getGenres();
        const genres = [{name: 'All Genres', _id: ''}, ...data];
        const {data: movies} = await getMovies();
        this.setState({movies, genres});
    }

    deleteHandler = async movie => {
        const originalMovies = this.state.movies;
        const movies = originalMovies.filter(m => m._id !== movie._id);
        this.setState({ movies });
        try{
            await deleteMovie(movie._id);
        }catch(ex){
            if(ex.response && ex.response.status === 404)
                toast.error("This movie has already been deleted");
            this.setState({ movies: originalMovies });
        }
    }

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    }

    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    }

    handleGenreSelect = (genre) => {
        this.setState({selectedGenre: genre, searchQuery: "", currentPage: 1});
    };

    handleSort = (sortColumn) => {
        this.setState({sortColumn});
    };

    handleSearch = (query) => {
        this.setState({searchQuery: query, selectedGenre: null, currentPage: 1});
    };

    render(){

        const {pageSize, 
               currentPage, 
               selectedGenre, 
               sortColumn, 
               searchQuery,
               movies : allMovies, 
               } = this.state;

        let filtered = allMovies;
        if(searchQuery)
            filtered = allMovies.filter(m => m.title.toLowerCase().startsWith(searchQuery.toLowerCase()));
        else if(selectedGenre && selectedGenre._id)
            filtered = allMovies.filter(m => m.genre._id === selectedGenre._id);

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const movies = Paginate(sorted, currentPage, pageSize);

        const { length : count } = this.state.movies;
        if(count === 0){
            return <p>There are no movies in the database</p>
        }
        return (
            <div className="row mt-3">
                <div className="col-3">
                    <ListGroup items = {this.state.genres} onItemSelect = {this.handleGenreSelect}
                    selectedItem = {this.state.selectedGenre} />
                </div>
               
                <div className = "col">
                    <button className="btn btn-primary sm-2 mb-1" >
                        <Link to="/movies/new" style={{color:"white",textDecoration:"none"}}>
                        New Movie</Link></button>
                    <p> Showing {filtered.length} movies in the database</p>
                    <SearchBox value={this.state.searchQuery} onChange={this.handleSearch} />
                    <MoviesTable movies = {movies} 
                        onLike = {this.handleLike} 
                        onDelete = {this.deleteHandler}
                        sortColumn = {sortColumn}
                        onSort = {this.handleSort} />
                    <Pagination itemCount={filtered.length}
                        pageSize = { pageSize} 
                        onPageChange={this.handlePageChange} 
                        currentPage={currentPage}/>
                </div>               
            </div>
        );
    }
}

export default Movies;