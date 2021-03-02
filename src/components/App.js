/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Login from './AuthForm/Login';
import Signup from './AuthForm/Signup';
import Dashboard from './Dashboard/Dashboard';
import Header from './Header';
import Footer from './Footer';
import ResultsDisplay from './ResultsDisplay/ResultsDisplay';
import Error from './Error';
import Loading from './Loading';
import AuthProvider from '../contexts/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css'
import About from './About';
import Account from './Account';

const App = () => {
  return (
    <>
    <AuthProvider>
      <Header />
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup} />
          <Route path='/results/:color'
            render={({match}) => {
              return <ResultsDisplay color={`${match.params.color}`} />
            }}
          />
          <Route path='/about' component={About}/>
          <Route path='/error' component={Error}/>
          <Route path='/loading' component={Loading}/>
          <Route path='/account' component={Account}/>
        </Switch>
        <Footer />
    </AuthProvider>
    </>
  )
}

export default App;

// {error && <Error />}
//we need to figure out how to get error and loading from auth context to conditionally render
// {loading && <Loading />}
