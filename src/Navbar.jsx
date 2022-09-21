import React from 'react'
import './Nabvar.css'

function navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark flex-row d-flex justify-content-around">
        <div>
           {/* <a className="navbar-brand text-light mx-5" href="#">Navbar</a> */}
           <img src="/belugs.png" alt="" className="belugs navbar-brand"/>
        </div>
  
    <div className="navbar-nav d-flex flex-row">
      <a className="nav-item nav-link active text-light mx-4" href="/">Home</a>
      <a className="nav-item nav-link text-light mx-4" id="border" href="/project">Visitors</a>
      <a className="nav-item nav-link text-light mx-4 " href="/">About Us</a>
    </div>
    <div>
    </div>

      </nav>
    </div>
  )
}

export default navbar
