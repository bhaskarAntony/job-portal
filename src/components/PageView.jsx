import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BasicTabs from './Homepage/Tabs';
import Home from './Homepage/Home';
import { Button } from '@mui/material';
import './pageview.css'
import JobOverview from './JobOverview';

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
    <div className='overflow-hidden m-0'>
    <div className=" container-fluid job-top p-2 py-5">
        <div className="row align-items-center">
            <div className="col-12 col-sm-12 col-md-8">
                <div className="job-left d-flex gap-4 flex-wrap align-items-center">
                    <img src="https://cdn-icons-png.flaticon.com/128/3688/3688596.png" alt="" />
                    <div className="job-top-info">
                        <h1 className="fs-4">{data.role}</h1>
                        <small className="text-primary small">{data.companyName}</small>
                     <div className="d-flex flex-wrap gap-3">
                     <p className='fs-6 text-secondary d-flex gap-2'><i class="bi bi-clock"></i>{data.date}</p>
                     <p className='fs-6 text-secondary d-flex gap-2'><i class="bi bi-wallet"></i>{data.package}</p>
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
    <div className="container-fluid job-body p-2 p-md-4">
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
    <div className="job-footer p-2 p-md-4">
       <div className="mb-3">
       <h1 className="fs-4">Related Jobs</h1>
        <small className='small text-secondary'>Find out more jobs</small>
       </div>
       <Home/>

    </div>
    </div>
  )
}

export default PageView
