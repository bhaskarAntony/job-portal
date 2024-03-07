import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';
import './style.css';
import { Shimmer } from 'react-shimmer';

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
  const [tech, setTech] = useState(null)
  const [bond, setBond] = useState(null)

  const fileterdata = ()=>{
   if(tech !=null){
    
    var filetered = data.filter(item => item.technology == tech)
    if(bond!=null){
      filetered = filetered.filter(item =>item.bond == bond)
    }
   
    console.log(data)
   
   } 
   else if(bond!=null){
    var filetered = data.filter(item => item.bond == bond)
    if(tech!=null){
      filetered = filetered.filter(item =>item.technology == tech)
    }
  }
  setData(filetered)
  }

  return (
    <section className='Home'>
      {loading ? (
   <div className="row">
    {
          Array(4).fill(null).map((_, index)=>(
            <div className="col-12 col-sm-12 col-md-6 mb-3">
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
                </div>
     ))
    }
   </div>
      ) : data.length === 0 ? (
      <div className="row">
        <div className="col-md-6 offset-md-3">
        <div className='d-flex flex-column align-items-center justify-content-center p-3 bg-white rounded-2'>
        <i class="bi bi-ban display-1 text-secondary"></i>
        <h1 className="fs-3 mt-3">No Jobs Available</h1>
       </div>
        </div>
      </div>
      ) : (
       <>
      <div className="bg-white p-3 rounded-3">
      <span className="fs-5 d-block">Filter Jobs</span>
      <small className="small text-secondary">Use filters to find your best job</small>
       <div className="filter d-flex gap-2 align-items-center flex-wrap">
       <div className="">
        {/* <label htmlFor="tech" className="form-label">Technology</label> */}
       <select name="technology" value={tech} id="tech" className='form-control rounded-5' onChange={(e) => { setTech((e.target.value)) }}>
       <option value="" selected disabled>Technology</option>
            <option value="React">MERN</option>
            <option value="MERN">MEAN</option>
            <option value="MERN">JAVA</option>
            <option value="MERN">PYTHON</option>
            <option value="MERN">Digital Marketing</option>
            <option value="MERN">Data Science</option>
            <option value="MERN">Cloud Oops</option>
        </select>
       </div>
       <div className="">
        {/* <label htmlFor="ex" className="form-label">Experience</label> */}
       {/* <select name="ex" id="ex" className='form-control rounded-5'>
            <option value="" selected disabled>Experience</option>
            <option value="fresher">Fresher</option>
            <option value="experience">Experience</option>
        </select> */}
       </div>
       <div className="">
        {/* <label htmlFor="ex" className="form-label">Experience</label> */}
       {/* <select name="bond" id="bond" className='form-control rounded-5'  value={bond}  onChange={(e) => { setBond((e.target.value)) }}>
            <option value="" selected disabled>Bond</option>
            <option value="yes">Bond is ok</option>
            <option value="no">Bond is not ok</option>
        </select> */}
       </div>
     <div className="">
     <Button variant='contained' className=' rounded-5' onClick={fileterdata}><i class="bi bi-filter-left mx-2 text-white fs-4"></i>Apply Filters</Button>
       </div>
     </div>
      </div>
     <hr />
        <div className="row">
            {
                 data.map((item, index) => (
                   <div className="col-12 col-sm-12 col-md-6 mb-3">
                    <div className="job-header p-3 bg-white rounded-3 mt-3">
            <span className="d-block fs-5 fw-bold">{item.title}</span>
            <span className="text-secondary small">{item.companyName}</span>
            <div className="d-flex gap-3 mt-3 ">
            <span className="d-block  text-secondary"><i class="bi bi-wallet2  text-secondary"></i> {item.experience}</span>
            <span className="d-block  text-secondary">&#8377;{item.package}</span>
            </div>
            <div className="d-flex gap-2 mt-3">
            <i class="bi bi-geo-alt"></i>
            <span className='fs-6 text-secondary'>{item.location}</span>
            </div>
            <hr />
            <div className="d-flex gap-3 align-items-center justify-content-between flex-wrap">
            <div className="d-flex gap-3">
                <span className="text-secondary small">Posted: <span className="text-black">1 day ago</span></span>
                <span className="text-secondary small">Openings: <span className="text-black">{item.openings}</span></span>
            </div>
        <div className="d-flex gap-2 ">
       <a href={item.link}> <Button variant='contained' className='p-2 rounded-5 px-4'>Apply for job</Button></a>
       <a href={`/jobview/${item._id}`}> <Button variant='outlined' className='p-2 rounded-5 px-4'>Learn More</Button></a>
        </div>
            </div>
        </div>
                   </div>
                  ))
            }
        </div>
       </>
       
      )}
    </section>
  );
}

export default Home;
