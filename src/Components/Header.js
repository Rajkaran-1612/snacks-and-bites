import React from 'react'

function Header() {
    function hide() {
        let navBar = document.querySelectorAll('.nav-link');
        let navCollapse = document.querySelector('.navbar-collapse.collapse');
        navBar.forEach(function(a){
            a.addEventListener("click", function(){
            navCollapse.classList.remove("show");
    })
})
    }
  return (
    <header>
    <nav className="navbar navbar-expand-lg navigation-wrap">
      <div className="container">
        <a className="navbar-brand" href="#"><img className="logo-img" src="assets/images/logo.png" /></a>
        <button className="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarText"
          aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-stream navbar-toggler-icon"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarText" onClick={hide}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact Us</a>
            </li>
            <li><a href="tel:+91 9004947716"><button className="main-btn">90049 47716</button></a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  )
}

export default Header
