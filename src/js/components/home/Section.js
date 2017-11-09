import React from 'react'

const Section = () => {
  return(
    <section className='bg-grey py-3'>
      <div className='container-fluid py-3  bg-white'>
        <h3 className='text-center'>Lorem ipsum</h3>
        <p className='text-center '>
          Nullam dapibus in mauris in sodales. Nunc vulputate nisl lacinia malesuada venenatis. Nullam
          molestie eget mi et gravida. Vestibulum tincidunt turpis eu erat pellentesque tempus.
        </p>
      </div>
      <div className='container-fluid bg-white'>
        <div className='row'>
          <div className='col-lg-3 col-md-3 py-3'>
            <div className='icon mx-auto d-flex react'>
              <img className='img-fluid my-auto' src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' />
            </div>
            <h5 className='text-center my-2 pb-2'>React Js</h5>
            <p>
              Nullam dapibus in mauris in sodales. Nunc vulputate nisl lacinia malesuada venenatis. Nullam
              molestie eget mi et gravida. Vestibulum tincidunt turpis eu erat pellentesque tempus.
            </p>
          </div>
          <div className='col-lg-3 col-md-3 py-3'>
            <div className='icon mx-auto d-flex redux'>
              <img className='img-fluid my-auto mx-auto' src='https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png' />
            </div>
            <h5 className='text-center my-2 pb-2'>Redux Js</h5>
            <p>
              Nullam dapibus in mauris in sodales. Nunc vulputate nisl lacinia malesuada venenatis. Nullam
              molestie eget mi et gravida. Vestibulum tincidunt turpis eu erat pellentesque tempus.
            </p>
          </div>
          <div className='col-lg-3 col-md-3 py-3'>
            <div className='icon mx-auto d-flex node'>
              <img className='img-fluid my-auto mx-auto' src='https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' />
            </div>
            <h5 className='text-center my-2 pb-2'>Node Js</h5>
            <p>
              Nullam dapibus in mauris in sodales. Nunc vulputate nisl lacinia malesuada venenatis. Nullam
              molestie eget mi et gravida. Vestibulum tincidunt turpis eu erat pellentesque tempus.
            </p>
          </div>
          <div className='col-lg-3 col-md-3 py-3'>
            <div className='icon mx-auto d-flex mongo'>
              <img className='img-fluid my-auto mx-auto' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Antu_mongodb.svg/200px-Antu_mongodb.svg.png' />
            </div>
            <h5 className='text-center my-2 pb-2'>MongoDB</h5>
            <p>
              Nullam dapibus in mauris in sodales. Nunc vulputate nisl lacinia malesuada venenatis. Nullam
              molestie eget mi et gravida. Vestibulum tincidunt turpis eu erat pellentesque tempus.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section
