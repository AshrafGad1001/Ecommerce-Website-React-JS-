import { Link } from 'react-router-dom';


export function NotFound() {
    return (
  
        <section className="min-vh-100 d-flex align-items-center justify-content-center bg-light">

            <div className="text-center">

                <h1 className="display-1 fw-bold text-primary">404</h1>

                <h2 className="fw-bold mb-3">Page Not Found</h2>

                <p className="text-muted mb-4">
                    Oops! The page you are looking for does not exist.
                </p>

                <Link to="/" className="btn btn-primary px-4">
                    Back To Home
                </Link>

            </div>

        </section>
    )
}