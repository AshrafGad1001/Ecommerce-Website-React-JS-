import { Link } from 'react-router-dom';

export function Home() {
    return (
        <section
            id="home"
            className="py-5"
            style={{ background: "#f8f9ff" }}
        >
            <div className="container">

                <div className="row align-items-center g-5">

                    {/* Image */}
                    <div className="col-md-6">
                        <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 8px 30px rgba(74,0,128,0.15)" }}>
                            <img
                                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee"
                                alt="React Development"
                                className="img-fluid"
                                style={{ width: "100%", height: "400px", objectFit: "cover" }}
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div className="col-md-6">

                        <p
                            className="fw-bold text-uppercase mb-2"
                            style={{ color: "#7c3aed", letterSpacing: "3px", fontSize: "13px" }}
                        >
                            Welcome To Our Platform
                        </p>

                        <h2
                            className="display-5 fw-bold mb-3"
                            style={{ color: "#0a0a2e" }}
                        >
                            Learn React The
                            <span style={{ color: "#7c3aed" }}> Right Way</span>
                        </h2>

                        <p
                            className="mb-4"
                            style={{ color: "#64748b", lineHeight: "1.8", fontSize: "16px" }}
                        >
                            Start your journey with React from scratch.
                            We cover everything from components and hooks
                            to building full real-world projects step by step.
                        </p>

                        <ul className="list-unstyled d-flex flex-column gap-2 mb-4">
                            <li style={{ color: "#64748b" }}>
                                <span style={{ color: "#7c3aed" }}>✔</span> Components & Props
                            </li>
                            <li style={{ color: "#64748b" }}>
                                <span style={{ color: "#7c3aed" }}>✔</span> Hooks & State Management
                            </li>
                            <li style={{ color: "#64748b" }}>
                                <span style={{ color: "#7c3aed" }}>✔</span> React Router & APIs
                            </li>
                        </ul>

                        <div className="d-flex gap-3">
                            <Link
                                to="/register"
                                className="btn btn-lg px-4"
                                style={{ background: "#7c3aed", color: "#fff" }}
                            >
                                Get Started →
                            </Link>
                            <Link
                                to="/about"
                                className="btn btn-lg px-4 btn-outline-secondary"
                            >
                                Learn More
                            </Link>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}