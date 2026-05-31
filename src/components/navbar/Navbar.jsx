import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faRightFromBracket, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { tokenContext } from './../../Context/userContext';
import { cartContext } from './../../Context/cartContext';

export function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const { setToken, token } = useContext(tokenContext);
    const { cartCount } = useContext(cartContext);

    function handleLogout() {
        localStorage.removeItem("userToken");
        setToken(null);
        navigate('/login');
    }

    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark px-4 py-3"
            style={{ background: "linear-gradient(135deg, #0a0a2e, #1a1a6e, #4a0080)" }}
        >
            <div className="container">

                {/* Brand */}
                <Link to="/" className="navbar-brand text-decoration-none d-flex align-items-center gap-2">
                    <FontAwesomeIcon icon={faStore} style={{ color: "#a78bfa", fontSize: "22px" }} />
                    <span className="fw-bold fs-5" style={{ color: "#ffffff" }}>ShopZone</span>
                </Link>

                {/* Toggler */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>

                    {/* Left Links */}
                    <ul className="navbar-nav me-auto d-flex gap-2 mt-2 mt-lg-0">
                        {token && (
                            <>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link text-white"
                                        style={{ transition: "color 0.2s" }}
                                        onMouseEnter={e => e.target.style.color = "#a78bfa"}
                                        onMouseLeave={e => e.target.style.color = "#fff"}>
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Products" className="nav-link text-white"
                                        style={{ transition: "color 0.2s" }}
                                        onMouseEnter={e => e.target.style.color = "#a78bfa"}
                                        onMouseLeave={e => e.target.style.color = "#fff"}>
                                        Products
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>

                    {/* Right Side */}
                    <div className="d-flex align-items-center gap-3 mt-2 mt-lg-0">



                        {token ? (
                            <>
                                {/* Cart */}
                                <Link to="/cart" className="nav-link text-white position-relative px-1">
                                    <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: "18px" }} />
                                    {cartCount > 0 && (
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                                            style={{ fontSize: "10px" }}>
                                            {cartCount}
                                        </span>
                                    )}
                                </Link>

                                {/* Logout */}
                                <button
                                    onClick={handleLogout}
                                    className="btn btn-sm text-white px-3"
                                    style={{ backgroundColor: "#DB1A1A", border: "none", borderRadius: "8px" }}
                                >
                                    <FontAwesomeIcon icon={faRightFromBracket} className="me-2" />
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="btn btn-sm btn-outline-light px-3">
                                    Login
                                </Link>
                                <Link to="/register" className="btn btn-sm px-3"
                                    style={{ background: "#7c3aed", color: "#fff", border: "none", borderRadius: "8px" }}>
                                    Register
                                </Link>
                            </>
                        )}
                    </div>

                </div>
            </div>
        </nav>
    );
}