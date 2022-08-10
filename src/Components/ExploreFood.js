import React from 'react'

function ExploreFood() {
  return (
    <section id="explore-food">
    <div className="explore-food wrapper">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="text-content text-center">
              <h2>Explore Our Foods</h2>
              <p>We provide a wide range of desi and authentic food with the feel of homeliness. The taste of our dishes
                will make you feel like it's straight from a home kitchen. We make use of authentic ingredients and no
                other chemicals which makes our dishes highly preferrable.</p>
            </div>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
            <div className="card">
              <img src="assets/images/img/img-3.jpg" className="img-fluid" />
              <div className="pt-3">
                <h4>Mattar Paneer (500 ML)</h4>
                <p>Time: 15 - 20 Minutes | Serves: 3</p>
                <span>₹145 <del>₹160</del></span>
                <button className="mt-4 main-btn">Order Now</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
            <div className="card">
              <img src="assets/images/img/img-4.jpg" className="img-fluid" />
              <div className="pt-3">
                <h4>Dal Makhni (300 ML)</h4>
                <p>Time: 30 - 45 Minutes | Serves: 3</p>
                <span>₹45<del>₹60</del></span>
                <button className="mt-4 main-btn">Order Now</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
            <div className="card">
              <img src="assets/images/img/img-5.jpg" className="img-fluid" />
              <div className="pt-3">
                <h4>Aloo Paratha</h4>
                <p>Time: 10 - 15 Minutes | Serves: 1</p>
                <span>₹40<del>₹50</del></span>
                <button className="mt-4 main-btn">Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ExploreFood

