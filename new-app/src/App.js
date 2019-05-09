import React from 'react';
import Login from './auth/Login'
import './App.css';
import {Route} from 'react-router-dom';
function App() {
  return (
    <>
      <header>
     
       <NavLink to="/login">Login</NavLink>
      </header>
      <main>
        <Route path="/login" component={Login}/>
      </main>
    </>
  );
}

export default App;
