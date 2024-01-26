import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';
import './style.css';

function Home() {
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
    <section className='Home'>
      {loading ? (
       <div className="job-post card shimmer" key={0}>
       <div className="card-header d-flex post-header gap-3">
         <div className="shimmer-box shimmer-avatar"></div>
         <div>
           <span className="d-block fs-5 shimmer-box"></span>
           <span className="d-block text-secondary fs-6 shimmer-box"></span>
         </div>
       </div>
       <div className="card-body p-0">
         <div className='shimmer-box w-100' style={{ height: '200px' }}></div>
         <div className="about p-3">
           <span className="fs-5 shimmer-box"></span>
           <small className="fs-6 d-block shimmer-box"></small>
           <hr />
           <div className="d-flex justify-content-between">
             <p className='fs-5'><i className="bi bi-braces shimmer-box"></i> <span className="shimmer-box"></span></p>
             <p className='fs-5 shimmer-box'></p>
           </div>
         </div>
         <div className="card-footer d-flex justify-content-between gap-3">
           <div className='rounded-5 w-100 shimmer-box' style={{ height: '40px' }}></div>
           <div className='rounded-5 w-100 shimmer-box' style={{ height: '40px' }}></div>
         </div>
       </div>
     </div>
      ) : data.length === 0 ? (
       <div className='d-flex flex-column align-items-center justify-content-center'>
        <i class="bi bi-ban display-1 text-secondary"></i>
        <h1 className="fs-3">No Jobs Available</h1>
       </div>
      ) : (
        <div className="row">
            {
                 data.map((item, index) => (
                   <div className="col-6 col-sm-6 col-md-3 col-lg-2">
                     <div className="job-post bg-white d-flex flex-column gap-2 rounded-2 align-items-center text-center p-2" key={index}>
                     <img src="https://cdn-icons-png.flaticon.com/128/3688/3688596.png" alt="" />
                     <small className='small text-info'>{item.companyName}</small>
                    <a href={`/jobview/${item._id}`}> <h1 className="fs-5">{item.role}</h1></a>
                    </div>
                   </div>
                  ))
            }
        </div>
       
      )}
    </section>
  );
}

export default Home;
