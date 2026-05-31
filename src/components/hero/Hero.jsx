import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { tokenContext } from '../../Context/userContext';

export function Hero() {

    const { token } = useContext(tokenContext);

    return (
        <>
            <section
                id="hero"
                className="d-flex align-items-center justify-content-center text-center text-white"
                style={{
                    minHeight: "60vh",
                    background: "linear-gradient(135deg, #0a0a2e, #1a1a6e, #4a0080)"
                }}
            >

                <div className="container">

                    <p className="text-uppercase fw-bold mb-2" style={{ letterSpacing: "4px", color: "#a78bfa" }}>
                        Start Journey
                    </p>

                    <h1 className="display-3 fw-bold mb-3">
                        Home Page <br />
                        <span style={{ color: "#a78bfa" }}>Using React</span>
                    </h1>

                    {!token &&
                        <div className="d-flex gap-3 justify-content-center">
                            <Link to="/register" className="btn btn-lg px-4" style={{ background: "#7c3aed", color: "#fff" }}>
                                Register
                            </Link>
                            <Link to="/login" className="btn btn-outline-light btn-lg px-4">
                                Login
                            </Link>
                        </div>
                    }

                </div>

            </section>
        </>
    )
}