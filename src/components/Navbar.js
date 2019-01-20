import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
  // setTimeout(() => {
  //   props.history.push('/about')
  // }, 2000);
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">Poke Times</a>
        <ul className="right">
          {/* instead of href we use Link to so react isn't reloading index, about, etc */}
          <li><Link to ="/">Home</Link></li>
          {/* NavLink adds class to href which could be useful -- Link doesn't add it  */}
          <li><NavLink to ="/about">About</NavLink></li>
          <li><NavLink to ="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Navbar)