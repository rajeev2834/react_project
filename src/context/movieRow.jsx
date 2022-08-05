import React,{useContext} from 'react';
import UserContext from './useContext';

function MovieRow(){
    const userContext = useContext(UserContext);
    return(
        <div>
            <h1>Movie Row {userContext.name}</h1>
        </div>
    )
}

export default MovieRow;
