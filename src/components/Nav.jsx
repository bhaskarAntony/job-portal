import React from 'react'
import './Homepage/style.css'
import { Button } from '@mui/material'

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg ">
    <div class="container-fluid">
      <a class="navbar-brand fs-3 fw-bold" href="/"><img src="https://bepractical.s3.us-east-2.amazonaws.com/brand-logo.cc6e3cf088a8fd3005b1.jpg" alt="logo" width={180} /></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav gap-2  me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">All Jobs</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link" href='/'>Upload Resume</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
        </form>
        <div className="nav-btns d-flex gap-2">
            <Button variant='outlined' className='rounded-5 p-2 px-4'>Login</Button>
            <Button variant='contained' className='rounded-5 p-2 px-4'>Register</Button>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Nav
