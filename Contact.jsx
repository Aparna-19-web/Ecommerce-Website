import React, { useState } from 'react'
import Navbar from '../Navbar'
import '../style.css'
function Contact() {
const [data,setData]=useState({
  fullname:'',
  phoneno:'',
  email:'',
  message:''
})

const InputEvent =(event)=>{

  const {name,value}=event.target;

  setData((preVal)=>{
  return {
      ...preVal,
      [name]:value,
  }
  });
};
  const formSubmit=(e)=>
  {
     e.preventDefault();
     alert(` My Name is : ${data.fullname}  . My Phone No is ${data.phoneno} & Email is ${data.email}, Here is what i want to say ${data.message}  `)
  }
  return (
    <div>
      <Navbar />
      <div className='my-5'><h1 className='text-center'>Contact Us</h1></div>
      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="fullname" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter Name" />
              </div>
              <div className="mb-3">
                <label for="phoneno" className="form-label">Phone No</label>
                <input type="number" className="form-control" id="" name="phoneno" value={data.phoneno} onChange={InputEvent} placeholder="Enter Phone No." />
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id=""  name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label for="msg" className="form-label">Message</label>
                <textarea className="form-control" id="" name="message" value={data.message} onChange={InputEvent} rows="3"></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">Submit form</button>
              </div>
            </form>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact