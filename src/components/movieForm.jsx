import React, { Component, useEffect } from 'react';
import Form from './form';
import Joi from 'joi-browser';
import {getGenres} from '../services/genreService';
import { getMovie, saveMovie } from '../services/movieService';
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

    async populateGenres() {
        const {data : genres} = await getGenres();
        this.setState({genres});
    }

    async populateMovies(){
        try{
            const movieId = this.props.match.params.id;
            if (movieId === "new") return;
            const {data} = await getMovie(movieId);
            this.setState({data: this.mapToViewModel(data)});
        } catch(ex){
            const {navigate} = this.props;
            if(ex.response && ex.response.status === 404)
             setTimeout(() => {navigate("/not-found",{replace: true})}, 0);
        }
    }

    async componentDidMount() {
        await this.populateGenres();
        await this.populateMovies();
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

    doSubmit = async () => {
        await saveMovie(this.state.data);
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