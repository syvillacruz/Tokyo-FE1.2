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
                        <Link to="/Raymark" className="link">Raymark</Link>
                    </li>
                    <li>
                        <Link to="/Elijah" className="link">Elijah</Link>
                    </li>
                    <li>
                        <Link to="/Bryce" className="link">Bryce</Link>
                    </li>
                    <li>
                        <Link to="/Steven" className="link">Steven</Link>
                    </li>
                    <li>
                        <Link to="/Carlos" className="link">Carlos</Link>
                    </li>
                    <li>
                        <Link to="/Peter" className="link">Peter</Link>
                    </li>
                </ul>
            </div>

        </nav>

    </div>
  )
}

export default Nav