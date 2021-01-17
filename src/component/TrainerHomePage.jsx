import React, { Component } from "react";
 
class TrainerHomePage extends Component {
  render() {
    return (
        <div class="description-admin-home">
            <div className="text-left" style={{width:'18rem'}}>
            <h4 className="button"style={{color:'white'}}>Welcome Trainer</h4>
      <div className="center" style={{width:'78rem'}}>

  <div className="bg-image hover-overlay ripple text-center" data-mdb-ripple-color="light">
 
  </div>
  <div className="card-body text-center">
    <a href="#!" className="btn btn-secondary"><h6>View Your Details</h6></a>
    <div>
      <br/>
    <a href="#!" className="btn btn-secondary"><h6>Update Your Details</h6></a>
    </div>
     <div className="text-right" style={{position:'absolute',bottom:'0pt',right:'0pt'}}>
            <a href="/login" className="button"style={{color:'white'}}><h5>Logout</h5></a>
    </div>
  </div>
  </div>
  </div>
  </div>
    );
  }
}
 
export default  TrainerHomePage;