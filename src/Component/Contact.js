import React from 'react'
import propTypes from 'prop-types'
const Contact = (props) => {
  return (
    <>
    <h1 className='text-center' style={{color:(props.mode==='dark'?'white':'black')}}>Contact Us</h1>
    <div className='Container 'style={{color:(props.mode==='dark'?'white':'black'),border:(props.mode==='dark'?'2px solid white':'2px solid black'),margin:'80px',padding:'10px'}}>
    
  <form className="row g-3">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">First Name</label>
    <input type="text" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Last Name</label>
    <input type="text" className="form-control" id="inputPassword4"/>
  </div>
 
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4"/>
  </div>
 
 
  <div className="col-md-6">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div>
  <div className="col-md-4">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-2">
    <label for="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip"/>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign in</button>
  </div>
</form>

    </div></>
  )
}

export default Contact
