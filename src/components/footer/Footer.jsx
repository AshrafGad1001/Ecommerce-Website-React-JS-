import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
    return (
        <footer
            className="text-white py-5"
            style={{ background: "linear-gradient(135deg, #0a0a2e, #1a1a6e, #4a0080)" }}
        >
            <div className="container">
                <div className="row g-4">

                    {/* Brand */}
                    <div className="col-md-4">
                        <div className="d-flex align-items-center gap-2 mb-3">
                            <FontAwesomeIcon icon={faStore} style={{ color: "#a78bfa", fontSize: "22px" }} />
                            <h2 className="fw-bold fs-4 mb-0" style={{ color: "#a78bfa" }}>ShopZone</h2>
                        </div>
                        <p style={{ color: "#cbd5e1", lineHeight: "1.8" }}>
                            Your one-stop destination for the best products online.
                            Fast delivery, easy returns, and secure payments.
                        </p>
                        <div className="d-flex gap-3 mt-3">
                            <a href="https://github.com/AshrafGad1001" target="_blank" rel="noreferrer"
                                style={{ color: "#a78bfa", fontSize: "20px" }}>
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                                style={{ color: "#a78bfa", fontSize: "20px" }}>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-4">
                        <h3 className="fw-bold fs-5 mb-3" style={{ color: "#a78bfa" }}>Quick Links</h3>
                        <ul className="list-unstyled d-flex flex-column gap-2">
                            <li>
                                <Link to="/" className="text-decoration-none"
                                    style={{ color: "#cbd5e1", transition: "color 0.2s" }}
                                    onMouseEnter={e => e.target.style.color = "#a78bfa"}
                                    onMouseLeave={e => e.target.style.color = "#cbd5e1"}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/Products" className="text-decoration-none"
                                    style={{ color: "#cbd5e1", transition: "color 0.2s" }}
                                    onMouseEnter={e => e.target.style.color = "#a78bfa"}
                                    onMouseLeave={e => e.target.style.color = "#cbd5e1"}>
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link to="/cart" className="text-decoration-none"
                                    style={{ color: "#cbd5e1", transition: "color 0.2s" }}
                                    onMouseEnter={e => e.target.style.color = "#a78bfa"}
                                    onMouseLeave={e => e.target.style.color = "#cbd5e1"}>
                                    Cart
                                </Link>
                            </li>
                            <li>
                                <Link to="/login" className="text-decoration-none"
                                    style={{ color: "#cbd5e1", transition: "color 0.2s" }}
                                    onMouseEnter={e => e.target.style.color = "#a78bfa"}
                                    onMouseLeave={e => e.target.style.color = "#cbd5e1"}>
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link to="/register" className="text-decoration-none"
                                    style={{ color: "#cbd5e1", transition: "color 0.2s" }}
                                    onMouseEnter={e => e.target.style.color = "#a78bfa"}
                                    onMouseLeave={e => e.target.style.color = "#cbd5e1"}>
                                    Register
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-md-4">
                        <h3 className="fw-bold fs-5 mb-3" style={{ color: "#a78bfa" }}>Contact</h3>
                        <ul className="list-unstyled d-flex flex-column gap-3">
                            <li className="d-flex align-items-center gap-2" style={{ color: "#cbd5e1" }}>
                                <FontAwesomeIcon icon={faEnvelope} style={{ color: "#a78bfa" }} />
                                ashrafgad542@gmail.com
                            </li>
                            <li className="d-flex align-items-center gap-2" style={{ color: "#cbd5e1" }}>
                                <FontAwesomeIcon icon={faPhone} style={{ color: "#a78bfa" }} />
                                01553585239
                            </li>
                            <li className="d-flex align-items-center gap-2" style={{ color: "#cbd5e1" }}>
                                <FontAwesomeIcon icon={faLocationDot} style={{ color: "#a78bfa" }} />
                                Shebin El-Kom, Menoufia, Egypt
                            </li>
                        </ul>
                    </div>

                </div>

                <hr style={{ borderColor: "#4a0080", marginTop: "40px" }} />

                <div className="d-flex justify-content-center align-items-center flex-wrap gap-2">
                    <p className="mb-0" style={{ color: "#cbd5e1", fontSize: "14px" }}>
                        © 2026 ShopZone. All Rights Reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}