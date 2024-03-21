import React from 'react'
import { Link } from "react-router-dom";

import "./navstyles.css"

function Nav() {
  return (
    <div>
      
        <nav className="nav">

            <div className="left">
                <ul>
                    <li>
                        <Link to="/raymark tomas" className="link">States</Link>
                    </li>
                    <li>
                        <Link to="/Elijah Rafael Gaylan" className="link">Effect</Link>
                    </li>
                    <li>
                        <Link to="/Bryce Angeles" className="link">Map</Link>
                    </li>
                    <li>
                        <Link to="/Steven Villacruz" className="link">Hooks</Link>
                    </li>
                    <li>
                        <Link to="/Carlos Sobrevilla" className="link">Hooks</Link>
                    </li>
                    <li>
                        <Link to="/Peter Aguilar" className="link">Hooks</Link>
                    </li>
                </ul>
            </div>

        </nav>

    </div>
  )
}

export default Nav