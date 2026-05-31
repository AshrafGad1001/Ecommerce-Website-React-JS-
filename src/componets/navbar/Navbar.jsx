import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from "react"
import { tokenContext } from './../../Context/userContext';


export function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const { setToken, token } = useContext(tokenContext);

    function handleLogout() {
        localStorage.removeItem("userToken");
        setToken(null);
        navigate('/login');
    }

    return (
        <>
            <nav
                className="navbar navbar-expand-lg navbar-dark px-4"
                style={{ background: "linear-gradient(135deg, #0a0a2e, #1a1a6e, #4a0080)" }}>

                <div className="navbar-brand fw-bold fs-4" style={{ color: "#ffffff" }}>
                    <Link to="/" className="text-decoration-none" style={{ color: "#ffffff" }}>
                        <FontAwesomeIcon icon={faStore} className="ms-5 me-5" />
                    </Link>
                </div>

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>


                    <ul className="navbar-nav me-auto d-flex gap-3">
                        {/* <li className="nav-item"><Link to="home" className="nav-link text-white">Home</Link></li> */}
                        {/* <li className="nav-item"><Link to="about" className="nav-link text-white">About</Link></li> */}

                        {/* <li className="nav-item"><Link to="services" className="nav-link text-white">Services</Link></li> */}
                        {/* <li className="nav-item"><Link to="contact" className="nav-link text-white">Contact</Link></li> */}
                        {/* <li className="nav-item"><Link to="Projects" className="nav-link text-white">Projects</Link></li> */}
                        {token ? (
                            <>
                                <li className="nav-item"><Link to="gallery" className="nav-link text-white">Gallery</Link></li>
                                <li className="nav-item"><Link to="Products" className="nav-link text-white">Products</Link></li>
                                <li className="nav-item"><Link to="Categories" className="nav-link text-white">Categories</Link></li>
                            </>
                        ) : null}
                    </ul>


                    <div className="d-flex gap-2 mt-2 mt-lg-0">
                        {token ? (
                            <button
                                onClick={handleLogout}
                                className="btn text-white"
                                style={{ backgroundColor: "#DB1A1A", borderColor: "#1E3A8A" }}
                            >
                                <FontAwesomeIcon icon={faRightFromBracket} className="me-2" />
                                Logout
                            </button>
                        ) : (
                            <>
                                <Link to="/login" className="btn btn-outline-light">Login</Link>
                                <Link to="/register" className="btn" style={{ background: "#7c3aed", color: "#fff" }}>Register</Link>
                            </>
                        )}
                    </div>

                </div>

            </nav>
        </>
    )
}