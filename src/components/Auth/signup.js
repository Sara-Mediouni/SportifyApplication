import React, { Component } from 'react'
import './Login.css';




export default function Signup() {
 

  



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
            <img  className="img" src="" />
              <div className="login-wrap p-4 p-md-5">
                <div className="d-flex">
                  <div className="w-100">
                    <h3 className="mb-4">Sign Up</h3>
                  </div>
                  <div className="w-100">
                    <p className="social-media d-flex justify-content-end">
                      <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-facebook"></span></a>
                      <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-twitter"></span></a>
                    </p>
                  </div>
                </div>
                <form className="signin-form" onSubmit={(e) => {
                                                    e.preventDefault();
                                                    this.connect();}}>
                  <div className="form-group mb-3">
                    <label className="label" for="name">Username</label>
                    <input type="text" className="form-control" placeholder="Username" required/>
                  </div>
                  <div className="form-group mb-3">
                    <label className="label" for="firstname">Firstname</label>
                    <input type="text" className="form-control" placeholder="Firstname" required/>
                  </div>
                  <div className="form-group mb-3">
                    <label className="label" for="lastname">Lastname</label>
                    <input type="text" className="form-control" placeholder="Lastname" required/>
                  </div>
                  <div className="form-group mb-3">
                    <label className="label" for="email">Email</label>
                    <input type="text" className="form-control" placeholder="Email" required/>
                  </div>
                  <div className="form-group mb-3">
                    <label className="label" for="password">Password</label>
                    <input type="password" className="form-control" placeholder="Password" required/>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="form-control btn btn-primary rounded submit px-3">Sign Up</button>
                  </div>
               
                  
                </form>
                <p className="text-center">Already member? <a data-toggle="tab" href="/login">Sign In</a></p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  
}
