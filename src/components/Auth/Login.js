import React, { Component } from 'react';
import './Login.css';
import { Navigate, useNavigate } from 'react-router-dom';


export default function Login() {
 
    return (
      <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
           
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-10">
            <div className="wrap d-md-flex">
              <img className="img" src="" />
              
              <div className="login-wrap p-4 p-md-5">
                <div className="d-flex">
                  <div className="w-100">
                    <h3 className="mb-4">Sign In</h3>
                  </div>
                  
                </div>
                <form className="signin-form"

>
                  <div className="form-group mb-3">
                    <label className="label" for="name">Username</label>
                    <input type="text" className="form-control" placeholder="Username" onChange={(e) => { this.setState({username: e.target.value }) }}required/>
                  </div>
                  <div className="form-group mb-3">
                    <label className="label" for="password">Password</label>
                    <input type="password" className="form-control" placeholder="Password" onChange={(e) => { this.setState({ password: e.target.value }) }} required/>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="form-control btn btn-primary rounded submit px-3">Sign In</button>
                  </div>
               
                  
                </form>
                <p className="text-center">Not a member? <a data-toggle="tab" href="/signup">Sign Up</a></p>
             
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  }

