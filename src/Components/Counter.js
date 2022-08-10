import React from 'react'
import CountUp from 'react-countup'

function Counter() {
  return (
    <section id="counter">
    <section className="counter-section">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
            <h2>
              <span id="count1"><CountUp end={100} duration={3} suffix='+' /></span>
            </h2>
            <p>DELICACIES</p>
          </div>
          <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
            <h2>
              <span id="count2"><CountUp end={4786} duration={8} suffix='+' /></span>
            </h2>
            <p>CUSTOMERS</p>
          </div>
          <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
            <h2>
              <span id="count3"><CountUp end={1440} duration={5} suffix='+' /></span>
            </h2>
            <p>REVIEWS</p>
          </div>
          <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
            <h2>
              <span id="count4"><CountUp end={7110} duration={10} suffix='+' /></span>
            </h2>
            <p>SAVINGS</p>
          </div>
        </div>
      </div>
    </section>
  </section>
  )
}

export default Counter
