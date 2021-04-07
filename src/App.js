
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
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Destination from './components/Destination/Destination';
import Login from './components/Login/Login';

export let UserContext = createContext()

function App() {
  let [loggedInUser, setLoggedInUser] = useState({})
  return (
    <div>
   <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
                <Header/>
          <Switch>
             <Route exact path="/">
                <Home/>
             </Route>
             <Route path="/login">
              <Login></Login>
             </Route>
             <PrivateRoute path="/destination/:id">
                <Destination></Destination>
             </PrivateRoute>
          </Switch>
        </Router>
   </UserContext.Provider>
    </div>
  );
}

export default App;
