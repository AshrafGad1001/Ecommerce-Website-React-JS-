import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faMobileScreen } from '@fortawesome/free-solid-svg-icons';

export default function Projects() {
    return (
        <section className="py-5 bg-light min-vh-100">
            <div className="container">

                
                <div className="text-center mb-5">
                    <p className="fw-bold text-uppercase mb-2 text-primary small">
                        Our Work
                    </p>
                    <h2 className="display-5 fw-bold text-dark">
                        Our <span className="text-primary">Projects</span>
                    </h2>
                    <p className="mt-3 mx-auto text-secondary w-50">
                        Explore our latest web and mobile projects
                        built with modern technologies.
                    </p>
                </div>

                <div className="row g-4">

                    
                    <div className="col-md-3">
                        <div className="card border-0 shadow-sm p-3 rounded-4">

                            <p className="fw-bold text-uppercase text-primary mb-3 small">
                                App Categories
                            </p>

                            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                                <li>
                                    <Link
                                        to="web"
                                        className="d-flex align-items-center gap-2 text-decoration-none px-3 py-2 rounded-3 text-dark bg-primary bg-opacity-10"
                                    >
                                        <FontAwesomeIcon icon={faGlobe} className="text-primary" />
                                        Web Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="mobile"
                                        className="d-flex align-items-center gap-2 text-decoration-none px-3 py-2 rounded-3 text-dark bg-primary bg-opacity-10"
                                    >
                                        <FontAwesomeIcon icon={faMobileScreen} className="text-primary" />
                                        Mobile Projects
                                    </Link>
                                </li>
                            </ul>

                        </div>
                    </div>

                    
                    <div className="col-md-9">
                        <div className="card border-0 shadow-sm p-4 rounded-4" style={{ minHeight: "400px" }}>
                            <Outlet />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}