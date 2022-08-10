import React from 'react'

function StoryMenu() {
  return (
    <>
    <section id="story">
    <div className="story-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="text-content">
              <h2>When a man's stomach is full it makes no
                difference whether he is rich or poor.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio
                finibus bibendum in sit amet leo. mauris feugiat erat tellus.</p>
              <button className="main-btn mt-3">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="menu">
    <div className="menu-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="text-content">
              <h2>Explore Our Menu</h2>
              <img className="menu-img img-fluid" src="assets/images/img/menu-card.jpeg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}

export default StoryMenu
