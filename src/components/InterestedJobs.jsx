import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './pageview.css'
import { Button } from '@mui/material';

function InterestedJobs() {
     // State to store the fetched data
  const [data, setData] = useState([]);
  // State to track loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.get('https://stormy-flannel-nightgown-ox.cyclic.app/api/job/all');
        setData(response.data);
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
    <div className='bg-white '>
    <div className="intrestedjobs">
    {
        data.map((item, index)=>(
          <div className="i-job-card">
              <div className="job-header p-3 bg-white rounded-3 mt-3">
            <a href={`/jobview/${item._id}`} className='text-black'><span className="d-block fs-5 fw-bold">{item.title}</span></a>
            <span className="text-secondary small">{item.companyName}</span>
            <div className="d-flex gap-3 mt-3 ">
            <span className="d-block  text-secondary"><i class="bi bi-wallet2  text-secondary"></i> 0-1 years</span>
            <span className="d-block  text-secondary">&#8377; {item.experience}</span>
            </div>
            <div className="d-flex gap-2 mt-3">
            <i class="bi bi-geo-alt"></i>
            <span className='fs-6 text-secondary'>{item.location}</span>
            </div>
            <hr />
            <div className="d-flex gap-3 justify-content-between">
                <span className="text-secondary small">Posted: <span className="text-black">1 day ago</span></span>
                <span className="text-secondary small">Openings: <span className="text-black">{item.openings}</span></span>
            </div>
          
        </div>
          </div>
        ))
      }
    </div>
      <div className="d-flex align-items-center justify-content-center mt-3">
        <Button variant='outlined' className='p-2 rounded-5 px-4'>View All</Button>
      </div>
    </div>
  )
}

export default InterestedJobs
