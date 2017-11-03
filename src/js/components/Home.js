import React from 'react'

const Home = () => {
  return(
    <div>
      <img className='img-fluid mt-5' src='https://static.pexels.com/photos/273011/pexels-photo-273011.jpeg' alt='trees in winter'/>
      <div className='container-fluid pt-5 align-middle'>
        <div className='row mt-4'>
          <div className='col mt-sm-5'>
            <h1 className='text-white text-center'>Title Placeholder</h1>
          </div>
        </div>
        <div className='text-center py-2 py-sm-5'>
          <a className='btn btn-primary mx-sm-3 rounded-0 text-white'>Placeholder</a>
          <a className='btn btn-success d-none d-sm-inline mx-sm-3 rounded-0 text-white'>Placeholder</a>
        </div>
        <div className="row pb-sm-5">
          <div className='col-lg-4 col-sm-4'>
            <div className='short-text text-muted text-center'>
              Lorem ipsum dolor sit
            </div>
          </div>
          <div className='col-lg-4 col-sm-4'>
            <div className='short-text text-muted text-center'>
              Lorem ipsum dolor sit
            </div>
          </div>
          <div className='col-lg-4 col-sm-4 pb-3'>
            <div className='short-text text-muted text-center'>
              Lorem ipsum dolor sit
            </div>
          </div>
        </div>
      </div>
      <section className='bg-white py-5 h-100'>
        <div className='container mb-5'>
          <h3 className='text-center'>Title Placeholder</h3>
          <h6 className='text-center pb-sm-3'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</h6>
        </div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-3 col-sm-3'>
              <div className='icon mx-auto'>
              </div>
            </div>
            <div className='col-lg-3 col-sm-3'>
              <div className='icon mx-auto'>
              </div>
            </div>
            <div className='col-lg-3 col-sm-3'>
              <div className='icon mx-auto'>
              </div>
              <h5 className='text-center my-2'>Placehoder</h5>
            </div>
            <div className='col-lg-3 col-sm-3'>
              <div className='icon mx-auto'>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
