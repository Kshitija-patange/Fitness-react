import React, { Component } from "react";
 
class User extends Component {
  render() {
    return (
      <div class="card center" style={{width:'58rem'}}>
  <div class="bg-image hover-overlay ripple text-center" data-mdb-ripple-color="light">
  <img src="user-logo1.jpg" class="img-fluid center"></img>
  </div>
  <div class="card-body text-center">
    <h5 class="card-title text-center">Welcome User</h5>
    <a href="/user-home" class="btn btn-secondary">Login</a>
    <div>
      <br/>
    <a href="#!" class="btn btn-secondary ">Sign-Up</a>
    </div>
    </div>
  </div>

    );
  }
}
 
export default User;