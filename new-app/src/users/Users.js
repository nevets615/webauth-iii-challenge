import React from 'react';
import axios from 'axios';

class Users extends React.Component {
    state = {
        users: []
    }
}

render() {
    return (
        <> 
     <h2>Users</h2>
     <ul>
         {this.state.users.map(u => {
             <li>key={u.id}</li>
         })}
         </ul>   
        </>
    )
}