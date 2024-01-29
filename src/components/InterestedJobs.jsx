import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './pageview.css'

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
    <div>
      {
        data.map((item, index)=>(
            <div className="job mb-2">
                <small className=" fs-6 d-block">{item.role}</small>
                <small className="text-secondary">{item.companyName}</small>
              <div className="d-flex gap-2 justify-content-between align-items-center">
              <div className="d-flex gap-2 mt-3 align-items-center">
                <i class="bi bi-geo-alt"></i>
                <span className='fs-6 text-secondary'>Bangalore R...
                {/* Bengaluru,Karnataka( Richmond Town, Domlur, Indira Nagar, 1A Block Koramangala, HSR Layout, BTM Layout, Manayata Tech Park, Marathahalli, Rajaji Nagar */}
                </span>
            </div>
            <small className="text-secondary date">posted 5 days ago</small>
              </div>
            <hr />
            </div>
        ))
      }
    </div>
  )
}

export default InterestedJobs
