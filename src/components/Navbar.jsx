import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import logo from '../assets/Icon.svg'
import brand from '../assets/Nexcent.svg'
import { Link } from "react-router-dom";

function Navbar() {
    return (
            <nav className=" navbar navbar-expand-md background-light   z-3 position-fixed w-100 shadow-sm" >
                <div className="container-fluid " >
                    <Link to='/' className="navbar-brand  d-block d-md-none" ><img src={logo} alt='LOGO' /> <img src={brand} alt='BRAND' /></Link>


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-around align-content-center " id="navbarSupportedContent">
                        <Link to='/' className="navbar-brand d-none  d-md-block" ><img src={logo} alt='LOGO' /> <img src={brand} alt='BRAND' /></Link>

                        <ul className="navbar-nav gap-0 gap-lg-4 mb-2 mb-md-0 fw-medium ">
                            <li className="nav-item">
                                <Link to='/' className="nav-link " aria-current="page" >Home</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to='/' className="nav-link " href="#services">Service</Link>
                            </li> */}
                            <li className="nav-item ">
                                <Link to='/about' className="nav-link" href="#features">About</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to='/' className="nav-link"  href="#product">Product</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link to='/contact' className="nav-link" href="#testimonials">Contact</Link>
                            </li>
                            <li className="nav-item ">
                                <Link to='/faq' className="nav-link" href="#faq">FAQ</Link>
                            </li>
                           
                        </ul>

                        <div className="d-flex gap-2 gap-lg-4" >
                            <button className="border-0 background-light  text-green" type="submit">Login</button>
                            <button className="border-0 rounded  background-green py-2 text-white px-4" type="submit">Sign up</button>

                        </div>
                    </div>
                </div>
            </nav>
    );
}

export default Navbar;