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

const App = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState('');

  return (
    <AuthProvider>
      <Header />
      {!user && <Redirect to='/login'/>}
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
          {user && !error && !loading && <Route exact path='/ '  component={Dashboard}/>}
          <Route path='/results' component={ResultsDisplay}/>
        </Switch>
    </AuthProvider>
    {error && <Error />}
    {loading && <Loading />}
    <Footer />
  )
}

export default App;
