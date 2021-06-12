import React from "react";
import Navbar from './Component/Navbar';
import { LinkContainer } from "react-router-bootstrap";

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
      <div>
      <Navbar><nav>
          <ul>
            <li>
      {/* <LinkContainer to="/signUp">
        <Navbar.Link>signUp</Navbar.Link>
        </LinkContainer>
        <LinkContainer to="/signIn">
        <Navbar.Link>signIn</Navbar.Link>
        </LinkContainer> */}
        </li>
          </ul>
        </nav>
        </Navbar>
       
        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/signIn">
          </Route>
          <Route path="/signUp">
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