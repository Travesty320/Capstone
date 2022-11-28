import React from 'react'
import { Button } from 'react-bootstrap'

export default function Home() {






  return (
    <>
      <div className='parent'>
        <div className='container1'>
          <Button href="/dairy" className='home1' variant="warning" type="Submit">
            Dairy
          </Button></div>
        <div className='container2'>
          <Button href="/meat" className='home2' variant="warning" type="Submit">
            Meat
          </Button></div>
        <div className='container3'>
          <Button href="/produce" className='home3' variant="warning" type="Submit">
            Produce
          </Button></div>
        <div className='container4'>
          <Button href="/snacks" className='home4' variant="warning" type="Submit">
            Snacks
          </Button>
        </div>
      </div>
    </>


  )
}