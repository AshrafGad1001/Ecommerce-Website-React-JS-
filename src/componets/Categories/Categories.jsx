
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt, faBolt } from '@fortawesome/free-solid-svg-icons';
import { Outlet } from 'react-router-dom';

export default function Categories() {
    return (
        <section className="py-5 bg-light min-vh-100">
            <div className="container">

                <div className="text-center mb-5">
                    <p className="fw-bold text-uppercase text-primary mb-2 small">Shop By</p>
                    <h2 className="display-5 fw-bold text-dark">
                        Our <span className="text-primary">Categories</span>
                    </h2>
                </div>

                <div className="row g-4 justify-content-center">

                    <div className="col-md-4">
                        <Link to="clothes" className="text-decoration-none">
                            <div className="card border-0 shadow-sm rounded-4 p-4 text-center h-100">
                                <div
                                    className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                                    style={{ width: "70px", height: "70px", borderRadius: "16px", background: "#ede9fe" }}
                                >
                                    <FontAwesomeIcon icon={faShirt} style={{ fontSize: "28px", color: "#7c3aed" }} />
                                </div>
                                <h5 className="fw-bold text-dark">Clothes</h5>
                                <p className="text-secondary small">Men & Women Collections</p>
                            </div>
                        </Link>
                    </div>

                    <div className="col-md-4">
                        <Link to="electronics" className="text-decoration-none">
                            <div className="card border-0 shadow-sm rounded-4 p-4 text-center h-100">
                                <div
                                    className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                                    style={{ width: "70px", height: "70px", borderRadius: "16px", background: "#ede9fe" }}
                                >
                                    <FontAwesomeIcon icon={faBolt} style={{ fontSize: "28px", color: "#7c3aed" }} />
                                </div>
                                <h5 className="fw-bold text-dark">Electronics</h5>
                                <p className="text-secondary small">Mobile, Laptop & Smart Accessories</p>
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