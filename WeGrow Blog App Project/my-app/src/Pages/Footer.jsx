import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='col-lg-12 col-12 bg-footer text-white'>
      <div className='container col-lg-8 col-md-8 col-sm-12 col-12 d-flex flex-wrap mx-auto'>
        <div className='col-lg-6 col-md-6 col-sm-12 col-12 mt-5 mb-5 pe-3'>
            <h3>Contact WeGrow Community for support and queries</h3>
            <small><p>sit amet Loreum epsum dolor sit amet Loreum epsum dolor loreum epsum sit amet Loreum epsum dolor sit amet Loreum epsum dolor sit amet Loreum epsum dolor loreum epsum sit amet Loreum epsum dolor sit amet</p></small>
            
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12 col-12 position-relative ps-5 pt-3'>
            <input placeholder='enter mail' type='text' className='mt-5 w-100 bg-transparent p-2 border border-white text-light'></input><br/>
        <small className='bg-primary btn text-white pt-1 pb-1 ps-3 pe-3 rounded mt-5'>Contact</small>
        </div>
            
      </div>
      </div>
    </div>
  )
}

export default Footer
