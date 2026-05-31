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
                        {token ? (
                            <>
                                <li className="nav-item">
                                    <Link to="Products" className="nav-link text-white">Products</Link>
                                </li>

                            </>
                        ) : null}
                    </ul>

                    <div className="d-flex align-items-center gap-2 mt-2 mt-lg-0 ">
                        <li className="nav-item me-5">
                            <Link to="cart" className="nav-link text-white position-relative">
                                <FontAwesomeIcon icon={faCartShopping} />
                                {cartCount > 0 && (
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>
                        </li>
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