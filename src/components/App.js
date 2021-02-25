/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Header from './Header';
import Footer from './Footer';
import ResultsDisplay from './ResultsDisplay';
import Error from './Error';
import Loading from './Loading';
import AuthProvider from '../contexts/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css'
import About from './About';

const App = () => {
  return (
    <>
    <AuthProvider>
      <Header />
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/login' component={Login}/>
          <Route path='/results/:color' 
            render={({match}) => {
              return <ResultsDisplay color={`${match.params.color}`} />
            }}
          />
          <Route path='/about' component={About}/>
        </Switch>
    </AuthProvider>
    <Footer />
    </>
  )
}

export default App;

// {error && <Error />}
// {loading && <Loading />}
