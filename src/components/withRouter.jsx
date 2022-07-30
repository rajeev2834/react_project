import React, {useEffect} from 'react';
import { useParams, useNavigate} from 'react-router-dom';

export function withRouter(Children){
   return (props) => {
         const match = {params: useParams()};
         const navigate = useNavigate();
            return <Children {...props} match={match} navigate={navigate} />;
   }
}