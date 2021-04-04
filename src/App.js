
import './App.css';
import {UserProvider} from './UserContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Destination from './components/Destination/Destination';

function App() {
  let [user, setUser] = useState({isLoggedIn : true})
  return (
    <div>
   <UserProvider value={[user, setUser]}>
        <Router>
                <Header/>
          <Switch>
             <Route exact path="/">
                <Home/>
             </Route>
             <PrivateRoute path="/destination/:id">
                <Destination></Destination>
             </PrivateRoute>
          </Switch>
        </Router>
   </UserProvider>
    </div>
  );
}

export default App;
