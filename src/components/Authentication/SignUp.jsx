import React, { useEffect, useState } from 'react'
import './style.css'
import { Button } from '@mui/material'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function SignUp() {
  const {id} = useParams()
  console.log(id)
   // State to store the fetched data
const [data, setData] = useState([]);
// State to track loading state
const [loading, setLoading] = useState(true);
const [status, setStatus] = useState(null);

useEffect(() => {
  // Function to fetch data
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://stormy-flannel-nightgown-ox.cyclic.app/api/job/${id}`);
      setData(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Call the fetchData function
  fetchData();
}, []);
  return (
    <div className='container-fluid'>
      {/* <header className='d-flex align-items-center justify-content-between p-3 overflow-hidden'>
        <img src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png" alt=""/>
        <p className="fs-5">Already Registered? <a href="">Login</a> here</p>
      </header> */}
      <div className="row">
        <div className="col-12 col-sm-12 col-md-4">
            <div className="auth-left p-2 p-md-5">
                <div className="card p-2 d-flex align-items-center flex-column gap-3">
                    <img src="https://static.naukimg.com/s/7/104/assets/images/white-boy.a0d2814a.png" alt="" />
                    <h1 className="fs-5">You are Applying to,</h1>
                    <ul className='p-1' type="none">
                    <li className="small fw-bold">
                        <div className="d-flex gap-2 ">
                  <i class="bi bi-geo-alt"></i>
                  <span className='fs-6 fw-bold'>{data.title}</span>
                  </div>
                     
                  </li>
                  <li>
                  <div className="d-flex gap-2 mt-3">
                  <i class="bi bi-geo-alt"></i>
                  <span className='fs-6 text-secondary'>{data.location}</span>
                  </div>
                  <hr />
                  </li>
                        <li className="small d-flex align-items-center justify-content-between mt-3">
                        <span className="d-block  text-secondary"><i class="bi bi-wallet2  text-secondary"></i> {data.experience}</span>
            <span className="d-block  text-secondary">&#8377;{data.package}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-12 col-sm-12 col-md-8">
            <div className="auth-right p-2 p-md-5">
                <div className="card p-3">
                    <h1 className="fs-4">Apply to  job & grow your career</h1>
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
                    <p className="small">By Applying to job, you agree to the <a href=""> Terms and Conditions</a> & <a href="">Privacy Policy</a> of be-practical.com</p>
                    <Button variant='contained' className='rounded-5'>register Now</Button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
