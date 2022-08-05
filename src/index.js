import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import App from './App';
import Counter from './hooks/counter';
import User from './hooks/User';
import MoviePage from './context/moviePage';

ReactDOM.render(<BrowserRouter>
                    <MoviePage />
                </BrowserRouter>, 
                document.getElementById('root')
            );
