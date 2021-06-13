import React from "react";
import Navbar from './Component/Navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from './Component/SignIn';
import SignUp from './Component/SignUp';


function App() {
  return (
    <Router>
      
      <Navbar/> 
        



        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/signIn">
            <SignIn/>
          </Route>
          <Route path="/signUp">
          <SignUp/>
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>
    
    </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

function Users() {
  return <h2>Users</h2>;
}
export default App;