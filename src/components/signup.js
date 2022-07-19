import React, { Component } from 'react'
import './Login.css';




export default function Signup() {
 

  



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
            <img  class="img" src="" />
              <div class="login-wrap p-4 p-md-5">
                <div class="d-flex">
                  <div class="w-100">
                    <h3 class="mb-4">Sign Up</h3>
                  </div>
                  <div class="w-100">
                    <p class="social-media d-flex justify-content-end">
                      <a href="#" class="social-icon d-flex align-items-center justify-content-center"><span class="fa fa-facebook"></span></a>
                      <a href="#" class="social-icon d-flex align-items-center justify-content-center"><span class="fa fa-twitter"></span></a>
                    </p>
                  </div>
                </div>
                <form class="signin-form" onSubmit={(e) => {
                                                    e.preventDefault();
                                                    this.connect();}}>
                  <div class="form-group mb-3">
                    <label class="label" for="name">Username</label>
                    <input type="text" class="form-control" placeholder="Username" required/>
                  </div>
                  <div class="form-group mb-3">
                    <label class="label" for="firstname">Firstname</label>
                    <input type="text" class="form-control" placeholder="Firstname" required/>
                  </div>
                  <div class="form-group mb-3">
                    <label class="label" for="lastname">Lastname</label>
                    <input type="text" class="form-control" placeholder="Lastname" required/>
                  </div>
                  <div class="form-group mb-3">
                    <label class="label" for="email">Email</label>
                    <input type="text" class="form-control" placeholder="Email" required/>
                  </div>
                  <div class="form-group mb-3">
                    <label class="label" for="password">Password</label>
                    <input type="password" class="form-control" placeholder="Password" required/>
                  </div>
                  <div class="form-group">
                    <button type="submit" class="form-control btn btn-primary rounded submit px-3">Sign Up</button>
                  </div>
               
                  
                </form>
                <p class="text-center">Already member? <a data-toggle="tab" href="/login">Sign In</a></p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  
}
