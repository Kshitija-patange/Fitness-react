import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Button, NavDropdown } from 'react-bootstrap';
import { Form, FormControl,} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import User from './User';
import Admin from './Admin';
import Trainer from './Trainer';
import AdminHomePage from './AdminHomePage';
import UserHomePage from './UserHomePage';
import TrainerHomePage from './TrainerHomePage';
import Logout from './Logout';
const NavbarPage = () => (
  <Router>
    <Navbar className="navbar" variant="light">
        <nav class="navbar navbar-expand-lg fixed-top ">  
 <a class="navbar-brand" href="#">Fitness Training App</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">  
 <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse " id="navbarSupportedContent">     <ul class="navbar-nav mr-4">
 <li class="nav-item">
     <a class="nav-link" data-value="home" href="/home">Home</a>        </li>  
      <NavDropdown title="Role" id="basic-nav-dropdown">
                                      <NavDropdown.Item href="/admin">Admin</NavDropdown.Item>
                                      <NavDropdown.Divider />
                                      <NavDropdown.Item href="/user">User</NavDropdown.Item>
                                      <NavDropdown.Divider />
                                      <NavDropdown.Item href="/trainer">Trainer</NavDropdown.Item>
                                  </NavDropdown>
<li class="nav-item">
    <a class="nav-link " data-value="about-us"href="/about-us">About Us</a>    
 </li>
 <li class="nav-item"> 
    <a class="nav-link " data-value="contact-us" href="/contact-us">Contact Us</a>         </li>   
</ul> 
</div></nav> 
    </Navbar>   
    <Switch>
                              <Route exact path="/home">
                                  <Home />
                              </Route>
                             
                              <Route path="/about-us">
                                  <AboutUs />
                              </Route>
                              
                              <Route path="/contact-us">
                                  <ContactUs />
                              </Route>
                              
                              <Route path="/admin">
                                  <Admin />
                              </Route>
                          
                              <Route path="/user">
                                  <User />
                              </Route>
                          {/* </Switch>
                          <Switch> */}
                              <Route path="/trainer">
                                  <Trainer />
                              </Route>
                              <Route path="/admin-home">
                                  <AdminHomePage/>
                              </Route>
                              <Route path="/user-home">
                                  <UserHomePage/>
                              </Route>
                              <Route path="/trainer-home">
                                  <TrainerHomePage/>
                              </Route>
                              <Route path="/logout">
                                  <Logout/>
                              </Route>
                          </Switch>
                      </Router>
);

export default NavbarPage;