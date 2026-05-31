import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useState } from 'react';
import { useContext } from "react"
import { tokenContext } from './../../Context/userContext';

export default function Login() {

    const navigate = useNavigate();
    const location = useLocation();
    const message = location.state?.message;
    const { setToken } = useContext(tokenContext);
    const [apiError, setApiError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function handelLogin(formikValues) {
        setIsLoading(true);
        setApiError("");

        try {
            let { data } = await axios.post(
                "https://ecommerce.routemisr.com/api/v1/auth/signin",
                formikValues
            );

            if (data.message === "success") {
                localStorage.setItem("userToken", data.token);
                setToken(data.token);
                navigate("/");
            }
        } catch (error) {
            setApiError(
                error.response?.data?.message || "Something went wrong"
            );
        }

        setIsLoading(false);
    }

    let LoginSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: LoginSchema,
        onSubmit: handelLogin
    });

    return (
        <section className="min-vh-100 d-flex align-items-center justify-content-center bg-light">

            <div className="card shadow p-4" style={{ width: "400px" }}>

                <h2 className="text-center fw-bold mb-4">Login</h2>

                {/* رسالة الـ RoutingGuards */}
                {message &&
                    <div className="alert alert-warning text-center">
                        🔒 {message}
                    </div>
                }

                {apiError && <div className="alert alert-danger">{apiError}</div>}

                <form onSubmit={formik.handleSubmit}>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                            placeholder="Enter your email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email &&
                            <span className="text-danger small">{formik.errors.email}</span>
                        }
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
                            placeholder="Enter your password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                        {formik.touched.password && formik.errors.password &&
                            <span className="text-danger small">{formik.errors.password}</span>
                        }
                    </div>

                    <button type="submit" className="btn btn-primary w-100 mt-2" disabled={isLoading}>
                        {isLoading && <FontAwesomeIcon icon={faSpinner} spin className="me-2" />}
                        {isLoading ? "Logging in..." : "Login"}
                    </button>

                </form>

                <p className="text-center text-muted mt-3">
                    Don't have an account?{" "}
                    <Link to="/register">Register</Link>
                </p>

            </div>

        </section>
    );
}