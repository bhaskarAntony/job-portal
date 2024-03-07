import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Home from './Homepage/Home';
import { Button } from '@mui/material';
import './pageview.css'
import JobOverview from './JobOverview';
import InterestedJobs from './InterestedJobs';
import { Shimmer } from 'react-shimmer';

function PageView() {
    const {id} = useParams()
    console.log(id)
     // State to store the fetched data
  const [data, setData] = useState([]);
  // State to track loading state
  const [loading, setLoading] = useState(true);

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
    <div className='overflow-hidden p-0 m-0'>
    {/* <div className=" container-fluid job-top p-4 py-2">
        <div className="row align-items-center">
            <div className="col-12 col-sm-12 col-md-8">
                <div className="job-left d-flex gap-4 flex-wrap align-items-center">
                    <img src="https://cdn-icons-png.flaticon.com/128/3688/3688596.png" alt="" />
                    <div className="job-top-info">
                        <h1 className="fs-4">{data.role}</h1>
                        <small className="text-primary small">{data.companyName}</small>
                     <div className="d-flex flex-wrap gap-3">
                     <p className='fs-6 text-secondary d-flex gap-2'><i class="bi bi-clock text-primary"></i>{new Date(data.date).toLocaleTimeString()} {new Date(data.date).toLocaleDateString()}</p>
                     <p className='fs-6 text-secondary d-flex gap-2'><i class="bi bi-wallet text-primary"></i>{data.package}</p>
                     </div>
                    </div>

                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4">
                <div className="job-left d-flex flex-wrap gap-2">
                <Button variant='contained' className='p-3 px-5 rounded-3'>Apply For Job</Button>
                <Button variant='outlined' className='bookmark rounded-3 fs-4 text-primary'><i class="bi bi-bookmark text-primary"></i></Button>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid job-body p-4 p-md-4 py-2">
       <div className="row">
        <div className="col-12 col-sm-12 col-md-8">
        <div className="jd">
        <div className='fs-6' dangerouslySetInnerHTML={{ __html: data.jd}} />
        </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4">
         <div className="">
         <JobOverview data={data}/>
         </div>
        </div>
       </div>
    </div>
    <div className="job-footer p-4 p-md-4 mt-5 py-2">

       <div className="mb-3">

       <h1 className="fs-4">Related Jobs</h1>
        <small className='small text-secondary'>Find out more jobs</small>
       </div>

       <Home/>

    </div> */}
    <div className="container">
    <div className="row">
    <div className="col-12 col-md-8">
        <div className="job-left p-1 p-md-5">
            {
                loading?(
                   <>
                    <div className="job-header p-3 bg-white rounded-3 mt-3">
                    {/* <span className="d-block fs-5 fw-bold">{item.role}</span> */}
                    <Shimmer width="60%" height={15} className='rounded-5'/>
                    <Shimmer width="20%" height={10} className='rounded-5 mt-2'/>
                    {/* <span className="text-secondary small">{item.companyName}</span> */}
                    <div className="d-flex gap-3 mt-3">
                    {/* <span className="d-block  text-secondary"><i class="bi bi-wallet2  text-secondary"></i> 0-1 years</span> */}
                    <Shimmer width="40%" height={10} className='rounded-5'/>
                    <Shimmer width="40%" height={10} className='rounded-5'/>
                    {/* <span className="d-block  text-secondary">&#8377;{item.package}</span> */}
                    </div>
                    <div className=" mt-3">
                    {/* <i class="bi bi-geo-alt"></i> */}
                    <Shimmer width="90%" height={15} className='rounded-5'/> <br />
                    <Shimmer width="70%" height={15} className='rounded-5'/> <br />
                    <Shimmer width="50%" height={15} className='rounded-5'/> <br />
                    {/* <span className='fs-6 text-secondary'>Bangalore Rural,Karnataka, Bengaluru,Karnataka( Richmond Town, Domlur, Indira Nagar, 1A Block Koramangala, HSR Layout, BTM Layout, Manayata Tech Park, Marathahalli, Rajaji Nagar )</span> */}
                    </div>
                    <hr />
                    <div className="d-flex gap-3 align-items-center justify-content-between flex-wrap">
                    <div className="d-flex gap-3">
                    <Shimmer width="30%" height={10} className='rounded-5'/>
                    <Shimmer width="30%" height={10} className='rounded-5'/>
                        {/* <span className="text-secondary small">Posted: <span className="text-black">1 day ago</span></span>
                        <span className="text-secondary small">Openings: <span className="text-black">6</span></span> */}
                    </div>
                    <div className="d-flex gap-2 ">
                    {/* <Button variant='contained' className='p-2 rounded-5 px-4'>Apply for job</Button> */}
                    {/* <a href={`/jobview/${item._id}`}> <Button variant='outlined' className='p-2 rounded-5 px-4'>Learn More</Button></a> */}
                    {/* <Shimmer width="40%" height={40} className='rounded-5'/>
                    <Shimmer width="40%" height={40} className='rounded-5'/> */}
                    </div>
                    </div>
                    </div>
                     <div className="job-body p-3 bg-white rounded-3 mt-3">
                     <div className="jd d-flex flex-column gap-3">
                     <Shimmer width="90%" height={15} className='rounded-5'/> <br />
                    <Shimmer width="80%" height={15} className='rounded-5'/> <br />
                    <Shimmer width="70%" height={15} className='rounded-5'/> <br />
                    <Shimmer width="60%" height={15} className='rounded-5'/> <br />
                    <Shimmer width="50%" height={15} className='rounded-5'/> <br />
                    <Shimmer width="40%" height={15} className='rounded-5'/> <br />
                     </div>
                     {/* <hr />
                    <div className="icons d-flex gap-2">
                    <i className='bi bi-facebook'></i>
                     <i className='bi bi-twitter'></i>
                     <i className='bi bi-linkedin'></i>
                    </div> */}
                     </div>
                     <div className="job-footer p-3 bg-white rounded-3 mt-3">
                    {/* <h1 className="fs-5">{data.companyName}</h1> */}
                    <Shimmer width="40%" height={20} className='rounded-5'/> <br />
                    <div className="mt-3">
                    {/* <i class="bi bi-geo-alt"></i>
                    <span className='fs-6 text-secondary'>{data.location}</span> */}
                      <Shimmer width="80%" height={15} className='rounded-5'/> <br />
                      <Shimmer width="70%" height={15} className='rounded-5'/> <br />
                      <Shimmer width="60%" height={15} className='rounded-5'/> <br />
                    </div>
                   </div>
                   </>
                ):(
                 <>
                    <div className="job-header p-3 bg-white rounded-3 mt-3">
                     {
                      data.bond=="yes"?(
                        <>
                         <div className="alert alert-warning">
                          <h1 className="alert-subtitle small">Information</h1>
                          <h1 className="alert-title fs-5">This Job Required Bond Agremenet</h1>
                        </div>
                        </>
                      ):(null)
                     }
                    <span className="d-block fs-5 fw-bold">{data.title}</span>
                    <span className="text-secondary small">{data.companyName}</span>
                    <div className="d-flex gap-3 mt-3 ">
                    <span className="d-block  text-secondary"><i class="bi bi-app-indicator  text-secondary"></i> 0-1 years</span>
                    <span className="d-block  text-secondary"><i className='bi  bi-wallet2 text-secondary'></i> {data.package}</span>
                    </div>
                    <div className="d-flex gap-2 mt-3">
                    <i class="bi bi-geo-alt"></i>
                    <span className='fs-6 text-secondary'>{data.location}</span>
                    </div>
                    <hr />
                    <div className="d-flex gap-3 align-items-center justify-content-between flex-wrap">
                    <div className="d-flex gap-3">
                        <span className="text-secondary small">Posted: <span className="text-black">1 day ago</span></span>
                        <span className="text-secondary small">Openings: <span className="text-black">{data.openings}</span></span>
                    </div>
                 <a href={data.link}>   <Button variant='contained' className='p-2 rounded-5 px-4' data-bs-toggle="modal" data-bs-target="#exampleModal">Apply for job</Button></a>
                    </div>
                </div>
                   <div className="job-body p-3 bg-white rounded-3 mt-3">
                   <div className="jd">
                   <div className='fs-6' dangerouslySetInnerHTML={{ __html: data.jd}} />
                   </div>
                   {/* <hr />
                  <div className="icons d-flex gap-2">
                  <i className='bi bi-facebook'></i>
                   <i className='bi bi-twitter'></i>
                   <i className='bi bi-linkedin'></i>
                  </div> */}
                   </div>
                   <div className="job-footer p-3 bg-white rounded-3 mt-3">
                    <h1 className="fs-5">{data.companyName}</h1>
                    <div className="d-flex gap-2 mt-3">
                    <i class="bi bi-geo-alt"></i>
                    <span className='fs-6 text-secondary'>{data.location}</span>
                    </div>
                   </div>
                 </>
                )
            }
       
       
        </div>
    </div>
    <div className="col-12 col-md-4">
        <div className="job-right w-100 p-2 py-md-5">
            <div className="card bg-white p-3 w-100">
                <h1 className="fs-6 mb-2">Jobs you might be interested in</h1>
                <InterestedJobs/>
            </div>
        </div>
    </div>
    </div>
    </div>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title fs-6" id="exampleModalLabel">{data.title}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div className="form-group mt-2">
          <label htmlFor="" className="form-label">Student Name</label>
          <input type="text" className="form-control"  name='username' placeholder='Enter your anme'/>
        </div>
        <div className="form-group mt-2">
          <label htmlFor="" className="form-label">Phone Number</label>
          <input type="text" className="form-control"  name='username' placeholder='Enter your anme'/>
        </div>
        <div className="form-group mt-2">
          <label htmlFor="" className="form-label">Passed out year</label>
          <input type="text" className="form-control"  name='username' placeholder='Enter your anme'/>
        </div>
        <div className="form-group mt-2">
          <label htmlFor="" className="form-label">Qualification</label>
          <textarea name="address" id="" cols="30" rows="5" className='form-control'></textarea>
        </div>
      </div>
      <div class="modal-footer d-flex gap-3">
      <Button variant='outline' className='p-2 rounded-5 px-4 border' data-bs-dismiss="modal" aria-label="Close">Cancel</Button>
       <Button variant='contained' className='p-2 rounded-5 px-4'>Submit</Button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default PageView
