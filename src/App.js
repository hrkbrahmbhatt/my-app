import React from "react";
import Navbar from './Pages/Navbar';
import { LinkContainer } from "react-router-bootstrap";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';


function App() {
  return (
    <Router>
      <div>
      <Navbar><nav>
          <ul>
            <li>
      <LinkContainer to="/signUp">
        <Navbar.Link>signUp</Navbar.Link>
        </LinkContainer>
        <LinkContainer to="/signIp">
        <Navbar.Link>signIn</Navbar.Link>
        </LinkContainer>
        </li>
          </ul>
        </nav>
        </Navbar>
       
        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/signIn">
            <SignIn/>
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </div>
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