import React, { Component, useEffect } from 'react';
import Form from './form';
import Joi from 'joi-browser';
import {getGenres} from '../services/fakeGenreService';
import { getMovie, saveMovie } from './../services/fakeMovieService';
import { withRouter } from './withRouter';


class MovieForm extends Form {
    
    state = {
        data : {
            title: "", 
            genreId: "", 
            numberInStock: "", 
            dailyRentalRate:""
        },
        genres: [],
        errors: {}
    };

    schema = {
        _id: Joi.string(),
        title: Joi.string().required().label("Title"),
        genreId: Joi.string().required().label("Genre"),
        numberInStock: Joi.number().required().label("Number in Stock").positive().integer().allow(0),
        dailyRentalRate: Joi.number().required().label("Daily Rental Rate").min(0).max(10)
    };

    componentDidMount() {
        this.setState({ genres: getGenres() });

        const movieId = this.props.match.params.id;
        const {navigate} = this.props;

        if (movieId === "new") return;

        const movie = getMovie(movieId);


        if (!movie) return setTimeout(() => {navigate("/not-found",{replace: true})}, 0);

        this.setState({ data: this.mapToViewModel(movie) });

    }


    mapToViewModel(movie) {
        return {
            _id: movie._id,
            title: movie.title,
            genreId: movie.genre._id,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate
        };
    }

    doSubmit = () => {
        saveMovie(this.state.data);
        this.props.navigate("/movies");
    };



    render() { 
        
        return (
            <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={this.handleSubmit}>
              <div className="Auth-form-content">
                <h3 className="Auth-form-title">Movie Form</h3>
                {this.renderInput("title", "Title")}
                {this.renderSelect("genreId", "Genre", this.state.genres)}
                {this.renderInput("numberInStock", "Number in Stock", "number")}
                {this.renderInput("dailyRentalRate", "Rate", "number")}
                <div className="d-grid gap-2 mt-3">
                    {this.renderButton("Save")}
                </div>
              </div>
            </form>
          </div>
        );
    }
}
 
export default withRouter(MovieForm);