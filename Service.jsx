import React from 'react'
import Navbar from '../Navbar'
import Card from './Card'
import Sdata from '../Sdata'

function Service() {
  return (
    <div>
      <Navbar />
      <div className='my-5'>
        <h1 className='text-center'>Our Service</h1>
      </div>

      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row gy-4'>
            


              

            {
              Sdata.map((val, ind) => {
                return <Card key={ind}
                  imgService={val.imgService}
                  title={val.title}
                  text={val.text}
                />
              })
            }


              



            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service