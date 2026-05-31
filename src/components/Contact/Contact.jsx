
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export function Contact() {
    return (
        <section id="contact" className="py-5" style={{ background: "#f8f9ff" }}>
            <div className="container">

                {/* Header */}
                <div className="text-center mb-5">
                    <p
                        className="fw-bold text-uppercase mb-2"
                        style={{ color: "#7c3aed", letterSpacing: "3px", fontSize: "13px" }}
                    >
                        Get In Touch
                    </p>
                    <h2 className="display-5 fw-bold" style={{ color: "#0a0a2e" }}>
                        Contact <span style={{ color: "#7c3aed" }}>Us</span>
                    </h2>
                    <p className="mt-3 mx-auto" style={{ color: "#64748b", maxWidth: "550px" }}>
                        Have any questions? We'd love to hear from you.
                        Send us a message and we'll respond as soon as possible.
                    </p>
                </div>

                <div className="row g-5">

                    {/* Info */}
                    <div className="col-md-4 d-flex flex-column gap-4">

                        <div className="d-flex align-items-center gap-3">
                            <div
                                className="d-flex align-items-center justify-content-center flex-shrink-0"
                                style={{ width: "50px", height: "50px", borderRadius: "12px", background: "#ede9fe" }}
                            >
                                <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "20px", color: "#7c3aed" }} />
                            </div>
                            <div>
                                <p className="fw-bold mb-0" style={{ color: "#0a0a2e" }}>Email</p>
                                <p className="mb-0" style={{ color: "#64748b" }}>test@gmail.com</p>
                            </div>
                        </div>

                        <div className="d-flex align-items-center gap-3">
                            <div
                                className="d-flex align-items-center justify-content-center flex-shrink-0"
                                style={{ width: "50px", height: "50px", borderRadius: "12px", background: "#ede9fe" }}
                            >
                                <FontAwesomeIcon icon={faPhone} style={{ fontSize: "20px", color: "#7c3aed" }} />
                            </div>
                            <div>
                                <p className="fw-bold mb-0" style={{ color: "#0a0a2e" }}>Phone</p>
                                <p className="mb-0" style={{ color: "#64748b" }}>0123456789</p>
                            </div>
                        </div>

                        <div className="d-flex align-items-center gap-3">
                            <div
                                className="d-flex align-items-center justify-content-center flex-shrink-0"
                                style={{ width: "50px", height: "50px", borderRadius: "12px", background: "#ede9fe" }}
                            >
                                <FontAwesomeIcon icon={faLocationDot} style={{ fontSize: "20px", color: "#7c3aed" }} />
                            </div>
                            <div>
                                <p className="fw-bold mb-0" style={{ color: "#0a0a2e" }}>Location</p>
                                <p className="mb-0" style={{ color: "#64748b" }}>Cairo, Egypt</p>
                            </div>
                        </div>

                    </div>

                    {/* Form */}
                    <div className="col-md-8">
                        <div
                            className="card border-0 p-4"
                            style={{ borderRadius: "16px", boxShadow: "0 8px 30px rgba(74,0,128,0.1)" }}
                        >

                            <div className="row g-3">

                                <div className="col-md-6">
                                    <label className="form-label fw-bold" style={{ color: "#0a0a2e" }}>Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your name"
                                        style={{ borderRadius: "10px", padding: "10px" }}
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label fw-bold" style={{ color: "#0a0a2e" }}>Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        style={{ borderRadius: "10px", padding: "10px" }}
                                    />
                                </div>

                                <div className="col-12">
                                    <label className="form-label fw-bold" style={{ color: "#0a0a2e" }}>Subject</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter subject"
                                        style={{ borderRadius: "10px", padding: "10px" }}
                                    />
                                </div>

                                <div className="col-12">
                                    <label className="form-label fw-bold" style={{ color: "#0a0a2e" }}>Message</label>
                                    <textarea
                                        className="form-control"
                                        rows="5"
                                        placeholder="Write your message..."
                                        style={{ borderRadius: "10px", padding: "10px", resize: "none" }}
                                    />
                                </div>

                                <div className="col-12">
                                    <button
                                        className="btn btn-lg w-100"
                                        style={{ background: "#7c3aed", color: "#fff", borderRadius: "10px" }}
                                    >
                                        Send Message →
                                    </button>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}