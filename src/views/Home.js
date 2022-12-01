import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function Home() {






  return (
    <>
      <div className='parent'>
        <div className='container1'>
          <Link to="/dairy"><Button className='home1' variant="warning" type="Submit">Dairy</Button></Link>
        </div>
        <div className='container2'>
          <Link to="/meat"><Button className='home2' variant="warning" type="Submit">Meat</Button></Link>
        </div>
        <div className='container3'>
          <Link to="/produce"><Button className='home3' variant="warning" type="Submit">Produce</Button></Link>
        </div>
        <div className='container4'>
          <Link to="/snacks"><Button className='home4' variant="warning" type="Submit">Snacks</Button></Link>
        </div>
      </div>
    </>


  )
}