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

const App = () => {
  return (
    <>
    <Header />
    <Switch>
      <Route path='/login' component={Login}/>
      <Route path='/signup' component={Signup}/>
      <Route exact path='/' component={Dashboard}/>
      <Route path='/results' component={ResultsDisplay}/>
      <Route path='/error' component={Error}/>
      <Route path='/loading' component={Loading}/>
    </Switch>
    <Footer />
    </>
  )
}

export default App;
