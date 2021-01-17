import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavbarPage from './component/NavbarPage';
import AboutUs from './component/AboutUs';

//import ContactUs from './ContactUs';
import Home from './component/Home';
import ContactUs from './component/ContactUs';
import User from './component/User';
import Admin from './component/Admin';
import Trainer from './component/Trainer';
import AdminHomePage from './component/AdminHomePage';
import UserHomePage from './component/UserHomePage';
import TrainerHomePage from './component/TrainerHomePage';
import Logout from './component/Logout';
//import HeaderComponent from './component/HeaderComponent';
//import FooterComponent from './component/FooterComponent';
function App() {
  return (
    <div>
      <Router>
        
        
      
          <div className="container">
            <Switch>
            <Route path = "/" component= {NavbarPage}></Route> 
            <Route path = "/home" component= {Home}><Home /></Route> 
              <Route path = "/about-us" component= {AboutUs}><AboutUs/></Route> 
              <Route path = "/contact-us" component= {ContactUs}><ContactUs/></Route> 
              <Route path = "/user" component={User}><User/></Route> 
               <Route path = "/admin" component={Admin}><Admin/></Route> 
              <Route path = "/trainer" component={Trainer}><Trainer/></Route>
              <Route path = "/admin-home" component={AdminHomePage}><AdminHomePage/></Route>
              <Route path = "/user-home" component={UserHomePage}><UserHomePage/></Route>
              <Route path = "/trainer-home" component={TrainerHomePage}><TrainerHomePage/></Route>
              <Route path = "/logout" component={Logout}><Logout/></Route> 
              
              {/* <Route path = "/add-employee" component= {CreateEmployeeComponent}></Route>  
              <Route path = "/update-employee/:id" component= {UpdateEmployeeComponent}></Route>
              <Route path = "/view-employee/:id" component= {ViewEmployeeComponent}></Route>               */}
            </Switch>
          </div>
        
       
      </Router>
    </div>
   
    
  );
}

export default App;