import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';
import './style.css';


function Simple() {
  // State to store the fetched data
  const [data, setData] = useState([]);
  // State to track loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3200/api/job/all');
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
    <section className='simple'>
      {loading ? (
       <p>Loading...</p>
      ) : data.length === 0 ? (
       <div className='d-flex flex-column align-items-center justify-content-center'>
        <i class="bi bi-ban display-1 text-secondary"></i>
        <h1 className="fs-3">No Jobs Available</h1>
       </div>
      ) : (
        data.map((item, index) => (
        <div className='simple-card card d-flex gap-3'>
          <a href="">
          <div className="d-flex gap-3">
           <img src="https://cdn-icons-png.flaticon.com/128/1533/1533907.png" alt="" />
           <div>
            <span className='fs-5 d-block'>{item.companyName}</span>
            <small className='small text-secondary'>{item.role}</small>
           </div>
           </div>
          </a>
        </div>
        ))
      )}
    </section>
  );
}

export default Simple;
