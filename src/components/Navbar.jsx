import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import logo from '../assets/Icon.svg'
import brand from '../assets/Nexcent.svg'

function Navbar() {
    return (
            <nav className=" navbar navbar-expand-md background-light    position-fixed w-100 shadow-sm" >
                <div className="container-fluid " >
                    <a className="navbar-brand  d-block d-md-none" href="#"><img src={logo} alt='LOGO' /> <img src={brand} alt='BRAND' /></a>


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-around align-content-center " id="navbarSupportedContent">
                        <a className="navbar-brand d-none  d-md-block" href="#"><img src={logo} alt='LOGO' /> <img src={brand} alt='BRAND' /></a>

                        <ul className="navbar-nav gap-0 gap-lg-4 mb-2 mb-md-0 fw-medium ">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">Service</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#">Feature</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"  href="#">Product</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Testimonial</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#">FAQ</a>
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