import React, { Component } from 'react';
import './Login.css';
import { Navigate, useNavigate } from 'react-router-dom';


export default function Login() {
 
    return (
      <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 text-center mb-5">
           
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-12 col-lg-10">
            <div class="wrap d-md-flex">
              <img class="img" src="" />
              
              <div class="login-wrap p-4 p-md-5">
                <div class="d-flex">
                  <div class="w-100">
                    <h3 class="mb-4">Sign In</h3>
                  </div>
                  
                </div>
                <form class="signin-form"

>
                  <div class="form-group mb-3">
                    <label class="label" for="name">Username</label>
                    <input type="text" class="form-control" placeholder="Username" onChange={(e) => { this.setState({username: e.target.value }) }}required/>
                  </div>
                  <div class="form-group mb-3">
                    <label class="label" for="password">Password</label>
                    <input type="password" class="form-control" placeholder="Password" onChange={(e) => { this.setState({ password: e.target.value }) }} required/>
                  </div>
                  <div class="form-group">
                    <button type="submit" class="form-control btn btn-primary rounded submit px-3">Sign In</button>
                  </div>
               
                  
                </form>
                <p class="text-center">Not a member? <a data-toggle="tab" href="/signup">Sign Up</a></p>
             
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  }

