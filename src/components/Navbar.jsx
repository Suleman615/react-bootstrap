import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import logo from '../assets/Icon.svg'
import brand from '../assets/Nexcent.svg'

function Navbar() {
    return (
            <nav class=" navbar navbar-expand-md background-light" >
                <div class="container-fluid " >
                    <a class="navbar-brand  d-block d-md-none" href="#"><img src={logo} alt='LOGO' /> <img src={brand} alt='BRAND' /></a>


                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse justify-content-around align-content-center " id="navbarSupportedContent">
                        <a class="navbar-brand d-none  d-md-block" href="#"><img src={logo} alt='LOGO' /> <img src={brand} alt='BRAND' /></a>

                        <ul class="navbar-nav gap-0 gap-lg-4 mb-2 mb-md-0 fw-medium ">
                            <li class="nav-item">
                                <a class="nav-link " aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="#">Service</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link" href="#">Feature</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link"  href="#">Product</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Testimonial</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link" href="#">FAQ</a>
                            </li>
                           
                        </ul>

                        <div class="d-flex gap-2 gap-lg-4" >
                            <button class="btn text-green" type="submit">Login</button>
                            <button class="btn  background-green text-white" type="submit">Sign up</button>

                        </div>
                    </div>
                </div>
            </nav>
    );
}

export default Navbar;