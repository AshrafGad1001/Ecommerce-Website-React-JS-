import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <>
            <footer
                className="text-white py-5"
                style={{ background: "linear-gradient(135deg, #0a0a2e, #1a1a6e, #4a0080)" }}
            >

                <div className="container">

                    <div className="row g-4">


                        <div className="col-md-4">
                            <h2 className="fw-bold fs-4" style={{ color: "#a78bfa" }}>
                                E-Commerce
                            </h2>
                            <p style={{ color: "#cbd5e1" }}>
                                E-Commerce -Learn React
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="col-md-4">
                            <h3 className="fw-bold fs-5 mb-3" style={{ color: "#a78bfa" }}>
                                Quick Links
                            </h3>
                            <ul className="list-unstyled d-flex flex-column gap-2">
                                <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
                                <li><Link to="/about" className="text-white text-decoration-none">About</Link></li>
                                <li><Link to="/services" className="text-white text-decoration-none">Services</Link></li>
                                <li><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="col-md-4">
                            <h3 className="fw-bold fs-5 mb-3" style={{ color: "#a78bfa" }}>
                                Contact
                            </h3>
                            <p style={{ color: "#cbd5e1" }}>Email: ashrafgad542@gmail.com</p>
                            <p style={{ color: "#cbd5e1" }}>Phone: 01553585239</p>
                        </div>

                    </div>

                    {/* Bottom */}
                    <hr style={{ borderColor: "#4a0080" }} />
                    <p className="text-center mb-0" style={{ color: "#cbd5e1" }}>
                        © 2026 All Rights Reserved
                    </p>

                </div>

            </footer>
        </>
    )
}