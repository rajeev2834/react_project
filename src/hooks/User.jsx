import React, {useState, useEffect} from 'react';
import axios from 'axios';

function User(props) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getUsers(){
            const response = await axios('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
        }

        getUsers();
    });

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default User;