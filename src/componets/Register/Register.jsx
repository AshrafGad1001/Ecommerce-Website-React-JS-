import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useState } from 'react';

export default function Register() {

    // async function handelRegister(values) {
    //     try {
    //         const { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',
    //             values
    //         );
    //         console.log(data);
    //     } catch (error) {
    //         console.log(error);
    //     }

    // }




    let navigate = useNavigate();
    const [apiError, setApiError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function handelRegister(formikValues) {
        setIsLoading(true);
        setApiError("");

        try {
            let { data } = await axios.post(
                "https://ecommerce.routemisr.com/api/v1/auth/signup",
                formikValues
            );

            if (data.message === "success") {
                navigate("/login");
            }
        } catch (error) {
            setApiError(
                error.response?.data?.message || "Something went wrong"
            );
        }

        setIsLoading(false);
    }

    let UserSchema = Yup.object().shape({
        name: Yup.string().min(3, "Name must be at least 3 characters").required("Name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
        rePassword: Yup.string().oneOf([Yup.ref('password')], "Passwords do not match").required("Confirm password is required"),
        phone: Yup.string().matches(/^01[0125][0-9]{8}$/, "Invalid phone number").required("Phone is required")
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            rePassword: '',
            phone: ''
        },
        validationSchema: UserSchema
        ,
        // validate(values) {
        //     let errors = {};

        //     if (!values.name) {
        //         errors.name = "Name is required";
        //     }

        //     if (!values.email) {
        //         errors.email = "Email is required";
        //     }

        //     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        //         errors.email = "Invalid email";
        //     }

        //     if (!values.phone) {
        //         errors.phone = "Phone is required";
        //     }

        //     if (!/^01[0125][0-9]{8}$/.test(values.phone)) {
        //         errors.phone = "Invalid phone number";
        //     }

        //     if (!values.password) {
        //         errors.password = "Password is required";
        //     }

        //     if (values.password.length < 6) {
        //         errors.password = "Password must be at least 6 chars";
        //     }

        //     if (values.rePassword !== values.password) {
        //         errors.rePassword = "Passwords do not match";
        //     }

        //     return errors;
        // },
        onSubmit: handelRegister
    });

    return (
        <section className="min-vh-100 d-flex align-items-center justify-content-center bg-light">

            <div className="card shadow p-4" style={{ width: "450px" }}>

                <h2 className="text-center fw-bold mb-4">Register</h2>

                {apiError && <div className="alert alert-danger">{apiError}</div>}

                <form onSubmit={formik.handleSubmit}>

                    {/* Name */}
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            name="name"
                            className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
                            placeholder="Enter your name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                        />
                        {formik.touched.name && formik.errors.name &&
                            <span className="text-danger small">{formik.errors.name}</span>
                        }
                    </div>

                    {/* Email */}
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

                    {/* Password */}
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

                    {/* Confirm Password */}
                    <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <input
                            type="password"
                            name="rePassword"
                            className={`form-control ${formik.touched.rePassword && formik.errors.rePassword ? 'is-invalid' : ''}`}
                            placeholder="Confirm your password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.rePassword}
                        />
                        {formik.touched.rePassword && formik.errors.rePassword &&
                            <span className="text-danger small">{formik.errors.rePassword}</span>
                        }
                    </div>

                    {/* Phone */}
                    <div className="mb-3">
                        <label className="form-label">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            className={`form-control ${formik.touched.phone && formik.errors.phone ? 'is-invalid' : ''}`}
                            placeholder="Enter your phone number"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phone}
                        />
                        {formik.touched.phone && formik.errors.phone &&
                            <span className="text-danger small">{formik.errors.phone}</span>
                        }
                    </div>
                    <button type="submit" className="btn btn-success w-100 mt-2">
                        {isLoading && <FontAwesomeIcon icon={faSpinner} spin className="ms-2" />} {isLoading ? "Registering..." : "Register"}
                    </button>

                </form>

                <p className="text-center text-muted mt-3">
                    Already have an account? <Link to="/login">Login</Link>
                </p>

            </div>

        </section>
    )

}