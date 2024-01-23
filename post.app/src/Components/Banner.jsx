import React from 'react'
import benar from './imges/banner.png'
import PostData from './PostData'

const Banner = () => {
  return (
    <>
    <div className="container banner mb-3">
      <div className="row">
        <div className="col-7 m-auto">
          <div>
            <h1>Articles for</h1>
            <h1 className="text-success">front-end devs</h1>
            <div>
              <p>
                Articles on web performance, responsive web dedign and more
              </p>
            </div>
          </div>
        </div>
        <div className="col-5 mt-3">
          <img
            src={benar}
            alt="banner img"
            className="image-fluid"
            width="100%"
          />
        </div>
      </div>
    </div>
    <PostData />
  </>
  )
}

export default Banner
