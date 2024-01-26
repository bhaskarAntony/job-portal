import React from 'react'
import './pageview.css'

function JobOverview({data}) {
  return (
    <div className='job-overview p-3 rounded-3 mt-4'>
      <div className="">
      <h1 className="fs-4 mb-4 ">Job Overview</h1>
      </div>
        <ul className='p-0'>
            <li className="d-flex gap-3 align-items-center mb-3">
            <i class="bi bi-calendar2 fs-3 text-primary"></i>
               <div className="">
                <span className="d-block fs-5">Date Posted:</span>
                <small className="d-block small">Posted {data.date}</small>
               </div>
            </li>
            <li className="d-flex gap-3 align-items-center mb-3">
            <i class="bi bi-hourglass-top fs-3 text-primary"></i>
               <div className="">
                <span className="d-block fs-5">Expiration date:</span>
                <small className="d-block small">Expires {data.date}</small>
               </div>
            </li>
            <li className="d-flex gap-3 align-items-center mb-3">
            <i class="bi bi-geo-alt fs-3 text-primary"></i>
               <div className="">
                <span className="d-block fs-5">Location:</span>
                <small className="d-block small">{data.date}</small>
               </div>
            </li>
            <li className="d-flex gap-3 align-items-center mb-3">
            <i class="bi bi-person fs-3 text-primary"></i>
               <div className="">
                <span className="d-block fs-5">Job Title:</span>
                <small className="d-block small">{data.role}</small>
               </div>
            </li>
            <li className="d-flex gap-3 align-items-center mb-3">
            <i class="bi bi-cash-coin fs-3 text-primary"></i>
               <div className="">
                <span className="d-block fs-5">Package</span>
                <small className="d-block small">{data.package}</small>
               </div>
            </li>
            
        </ul>
    </div>
  )
}

export default JobOverview
