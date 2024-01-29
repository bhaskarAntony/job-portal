import React from 'react'
import './style.css'
import { Button } from '@mui/material'

function SignUp() {
  return (
    <div>
      <header className='d-flex align-items-center justify-content-between p-3 overflow-hidden'>
        <img src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png" alt=""/>
        <p className="fs-5">Already Registered? <a href="">Login</a> here</p>
      </header>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-4">
            <div className="auth-left p-2 p-md-5">
                <div className="card p-2 d-flex align-items-center flex-column gap-3">
                    <img src="https://static.naukimg.com/s/7/104/assets/images/white-boy.a0d2814a.png" alt="" />
                    <h1 className="fs-5">On registering, you can</h1>
                    <ul>
                    <li className="small">Build your profile and let recruiters find you</li>
                    <li className="small">Get job postings delivered right to your email</li>
                        <li className="small">Find a job and grow your career</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-12 col-sm-12 col-md-8">
            <div className="auth-right p-2 p-md-5">
                <div className="card p-3">
                    <h1 className="fs-4">Find a job & grow your career</h1>
                    <div className="form-group">
                        <label htmlFor="">Full Name</label>
                        <input type="text" placeholder='What is your name?' name='name' />
                        <p className="n_error"></p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder='What is your name?' name='name' />
                        <p className="n_error"></p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Mobile Number</label>
                        <input type="text" placeholder='What is your name?' name='name' />
                        <p className="n_error"></p>
                    </div>
                    <div className="form-group">
                       <label htmlFor="">Work Status</label>
                      <div className="row">
                        <div className="col-12 col-md-6 col-lg-5">
                        <div className="ws1 card p-2">
                        <div className="row">
                            <div className="col-9">
                           <h1 className="fs-5">I'm experienced</h1>
                            <span className="small text-secondary">I have work experience (excluding internships)</span>
                           
                           </div>
                           <div className="col-3">
                                <img src="https://static.naukimg.com/s/7/104/assets/images/briefcase.bdc5fadf.svg" alt="" className="w-100" />
                            </div>
                        </div>
                       </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-5">
                        <div className="ws1 card p-2">
                        <div className="row">
                            <div className="col-9">
                           <h1 className="fs-5">I'm a fresher</h1>
                            <span className="small text-secondary">I am a student/ Haven't worked after graduation</span>
                           
                           </div>
                           <div className="col-3">
                                <img src="https://static.naukimg.com/s/7/104/assets/images/schoolbag.a54cbf7a.svg" alt="" className="w-100" />
                            </div>
                        </div>
                       </div>
                        </div>
                      </div>
                    </div>
                    <p className="small">By clicking Register, you agree to the <a href=""> Terms and Conditions</a> & <a href="">Privacy Policy</a> of be-practical.com</p>
                    <Button variant='contained' className='rounded-5'>register Now</Button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
