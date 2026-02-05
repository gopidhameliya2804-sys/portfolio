import React, { useState } from "react";

function Header() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div>
      {/* nav bar section start */}
      <nav>
        <div className="nav-section max-width d-flex">
          <h3>Gopi Dameliya</h3>
          <div className="menu-icon" onClick={() => setisOpen(!isOpen)}>
            <span className="fa fa-bars"></span>
          </div>
          <ul className={` nav-links d-flex ${isOpen ? "show" : ""}`}>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          {/* {<span className="fa fa-bars"></span>} */}
        </div>
      </nav>
      {/* nav bar section ends */}
    </div>
  );
}

export default Header;
