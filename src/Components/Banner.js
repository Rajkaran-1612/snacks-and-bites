import React from 'react'

function Banner() {
  return (
    <section id="home">
    <div className="container-fluid px-0 top-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6">
            <h1>Good food choices are good investments.</h1>
            <p>Savour the wholesomeness of Food with Foodies. Order the happiness home.
            </p>
            <div className="mt-4">
              <button className="main-btn">Order now <i className="fas fa-shopping-basket ps-3"></i></button>
              <a href="#"><img className="play-image" src="assets/images/img/get-it-on-google-play-badge.png" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Banner
