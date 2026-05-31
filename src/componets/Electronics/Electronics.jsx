import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Outlet } from 'react-router-dom';
import { faMobileScreen, faLaptop, faClock } from '@fortawesome/free-solid-svg-icons';

export default function Electronics() {
    return (
        <section className="py-5 bg-light min-vh-100">
            <div className="container">

                <div className="text-center mb-5">
                    <p className="fw-bold text-uppercase text-primary mb-2 small">Electronics</p>
                    <h2 className="display-5 fw-bold text-dark">
                        Categories by <span className="text-primary">Device</span>
                    </h2>
                </div>

                <div className="row g-4 justify-content-center">

                    <div className="col-md-4">
                        <Link to="mobile" className="text-decoration-none">
                            <div className="card border-0 shadow-sm rounded-4 p-4 text-center h-100">
                                <div
                                    className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                                    style={{ width: "70px", height: "70px", borderRadius: "16px", background: "#ede9fe" }}
                                >
                                    <FontAwesomeIcon icon={faMobileScreen} style={{ fontSize: "28px", color: "#7c3aed" }} />
                                </div>
                                <h5 className="fw-bold text-dark">Mobile</h5>
                                <p className="text-secondary small">iPhone, Samsung, Xiaomi</p>
                            </div>
                        </Link>
                    </div>

                    <div className="col-md-4">
                        <Link to="laptops" className="text-decoration-none">
                            <div className="card border-0 shadow-sm rounded-4 p-4 text-center h-100">
                                <div
                                    className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                                    style={{ width: "70px", height: "70px", borderRadius: "16px", background: "#ede9fe" }}
                                >
                                    <FontAwesomeIcon icon={faLaptop} style={{ fontSize: "28px", color: "#7c3aed" }} />
                                </div>
                                <h5 className="fw-bold text-dark">Laptop</h5>
                                <p className="text-secondary small">MacBook, Dell, HP</p>
                            </div>
                        </Link>
                    </div>

                    <div className="col-md-4">
                        <Link to="SmartAccessories" className="text-decoration-none">
                            <div className="card border-0 shadow-sm rounded-4 p-4 text-center h-100">
                                <div
                                    className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                                    style={{ width: "70px", height: "70px", borderRadius: "16px", background: "#ede9fe" }}
                                >
                                    <FontAwesomeIcon icon={faClock} style={{ fontSize: "28px", color: "#7c3aed" }} />
                                </div>
                                <h5 className="fw-bold text-dark">Smart Accessories</h5>
                                <p className="text-secondary small">Watch, AirPods, Tablet</p>
                            </div>
                        </Link>
                    </div>

                </div>


                <div className="mt-5">
                    <Outlet />
                </div>

            </div>
        </section>
    )
}