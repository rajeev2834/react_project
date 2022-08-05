import React, {useEffect} from 'react';
import { useParams, useNavigate, useLocation} from 'react-router-dom';

export function withRouter(Children){
   return (props) => {
         const match = {params: useParams()};
         const navigate = useNavigate();
         const location = useLocation();
            return <Children {...props} match={match} navigate={navigate} location={location}/>;
   }
}