import React from 'react'

function Newsletter() {
  return (
    <section id="newslettar">
    <div className="newslettar wrapper">
      <div className="container">
        <div className="row">
          <div className="sol-sm-12">
            <div className="text-content text-center pb-4">
              <h2>Hurry up! Subscribe our newsletter
                and get 25% Off</h2>
              <p>Limited time offer for this month. No credit card required. </p>
            </div>
            <form className="newsletter">
              <div className="row">
                <div className="col-md-8 col-12">
                  <input className="form-control" placeholder="Email Address here" name="email" type="email" />
                </div>
                <div className="col-md-4 col-12">
                  <button className="main-btn" type="submit">Subscribe</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Newsletter
