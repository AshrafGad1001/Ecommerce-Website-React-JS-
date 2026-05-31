import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCode,
    faPaintBrush,
    faLink,
    faLock,
    faBoxOpen,
    faRocket
} from '@fortawesome/free-solid-svg-icons';

export function Services() {
    return (
        <section id="services" className="py-5" style={{ background: "#f8f9ff" }}>
            <div className="container">

                {/* Header */}
                <div className="text-center mb-5">
                    <p
                        className="fw-bold text-uppercase mb-2"
                        style={{ color: "#7c3aed", letterSpacing: "3px", fontSize: "13px" }}
                    >
                        What We Offer
                    </p>
                    <h2 className="display-5 fw-bold" style={{ color: "#0a0a2e" }}>
                        Our <span style={{ color: "#7c3aed" }}>Services</span>
                    </h2>
                    <p className="mt-3 mx-auto" style={{ color: "#64748b", maxWidth: "550px" }}>
                        Everything you need to build modern web applications
                        with React from scratch to production.
                    </p>
                </div>

                {/* Cards */}
                <div className="row g-4">

                    <div className="col-md-4">
                        <div className="card h-100 border-0 p-4 text-center"
                            style={{ borderRadius: "16px", boxShadow: "0 8px 30px rgba(74,0,128,0.1)" }}>
                            <div className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                                style={{ width: "60px", height: "60px", borderRadius: "12px", background: "#ede9fe" }}>
                                <FontAwesomeIcon icon={faCode} style={{ fontSize: "24px", color: "#7c3aed" }} />
                            </div>
                            <h5 className="fw-bold mb-2" style={{ color: "#0a0a2e" }}>React Development</h5>
                            <p style={{ color: "#64748b" }}>
                                Learn how to build fast and scalable
                                web applications using React.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 border-0 p-4 text-center"
                            style={{ borderRadius: "16px", boxShadow: "0 8px 30px rgba(74,0,128,0.1)" }}>
                            <div className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                                style={{ width: "60px", height: "60px", borderRadius: "12px", background: "#ede9fe" }}>
                                <FontAwesomeIcon icon={faPaintBrush} style={{ fontSize: "24px", color: "#7c3aed" }} />
                            </div>
                            <h5 className="fw-bold mb-2" style={{ color: "#0a0a2e" }}>UI/UX Design</h5>
                            <p style={{ color: "#64748b" }}>
                                Build beautiful and responsive interfaces
                                using Bootstrap and modern CSS.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 border-0 p-4 text-center"
                            style={{ borderRadius: "16px", boxShadow: "0 8px 30px rgba(74,0,128,0.1)" }}>
                            <div className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                                style={{ width: "60px", height: "60px", borderRadius: "12px", background: "#ede9fe" }}>
                                <FontAwesomeIcon icon={faLink} style={{ fontSize: "24px", color: "#7c3aed" }} />
                            </div>
                            <h5 className="fw-bold mb-2" style={{ color: "#0a0a2e" }}>REST API Integration</h5>
                            <p style={{ color: "#64748b" }}>
                                Connect your React app to any backend
                                using Axios and REST APIs.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 border-0 p-4 text-center"
                            style={{ borderRadius: "16px", boxShadow: "0 8px 30px rgba(74,0,128,0.1)" }}>
                            <div className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                                style={{ width: "60px", height: "60px", borderRadius: "12px", background: "#ede9fe" }}>
                                <FontAwesomeIcon icon={faLock} style={{ fontSize: "24px", color: "#7c3aed" }} />
                            </div>
                            <h5 className="fw-bold mb-2" style={{ color: "#0a0a2e" }}>Authentication</h5>
                            <p style={{ color: "#64748b" }}>
                                Implement secure login and register
                                systems using JWT and React Router.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 border-0 p-4 text-center"
                            style={{ borderRadius: "16px", boxShadow: "0 8px 30px rgba(74,0,128,0.1)" }}>
                            <div className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                                style={{ width: "60px", height: "60px", borderRadius: "12px", background: "#ede9fe" }}>
                                <FontAwesomeIcon icon={faBoxOpen} style={{ fontSize: "24px", color: "#7c3aed" }} />
                            </div>
                            <h5 className="fw-bold mb-2" style={{ color: "#0a0a2e" }}>State Management</h5>
                            <p style={{ color: "#64748b" }}>
                                Master useState, useContext and
                                Redux for managing app state.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 border-0 p-4 text-center"
                            style={{ borderRadius: "16px", boxShadow: "0 8px 30px rgba(74,0,128,0.1)" }}>
                            <div className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                                style={{ width: "60px", height: "60px", borderRadius: "12px", background: "#ede9fe" }}>
                                <FontAwesomeIcon icon={faRocket} style={{ fontSize: "24px", color: "#7c3aed" }} />
                            </div>
                            <h5 className="fw-bold mb-2" style={{ color: "#0a0a2e" }}>Deployment</h5>
                            <p style={{ color: "#64748b" }}>
                                Deploy your React app to Vercel
                                or Netlify in minutes.
                            </p>
                        </div>
                    </div>

                </div>

                {/* CTA */}
                <div className="text-center mt-5">
                    <Link
                        to="/register"
                        className="btn btn-lg px-5"
                        style={{ background: "#7c3aed", color: "#fff", borderRadius: "10px" }}
                    >
                        Get Started →
                    </Link>
                </div>

            </div>
        </section>
    )
}