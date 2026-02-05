import React from 'react'

function Footer() {
return (
    <div>
        {/* footer section start */}
        <footer className="max-width">
            <div className="footer-section">
                <ul className="d-flex">
                    <li>
                        <a href="#"><span className="fa fa-home"></span> Home</a>
                    </li>
                    <li>
                        <a href="#"><span className="fa fa-user-o"></span> About</a>
                    </li>
                    <li>
                        <a href="#"><span className="fa fa-phone"></span> Contact</a>
                    </li>
                </ul>
            </div>
            <ul className="d-flex">
                <li className="icon">
                    <span className="fa fa-linkedin"></span>
                </li>
                <li className="icon">
                    <span className="fa fa-github"></span>
                </li>
                <li className="icon">
                    <span className="fa fa-instagram"></span>
                </li>
            </ul>
        </footer>
        {/* footer section ends */}
    </div>
)
}

export default Footer
