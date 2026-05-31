import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { tokenContext } from '../../Context/userContext';

export function Home() {

    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const { token } = useContext(tokenContext);

    useEffect(() => {
        async function getFeatured() {
            try {
                const { data } = await axios.get(
                    'https://ecommerce.routemisr.com/api/v1/products?limit=4'
                );
                setFeaturedProducts(data.data);
            } catch (error) {
                console.log(error);
            }
        }
        getFeatured();
    }, []);

    useEffect(() => {
        async function getCategories() {
            try {
                const { data } = await axios.get(
                    'https://ecommerce.routemisr.com/api/v1/categories'
                );
                setCategories(data.data);
            } catch (error) {
                console.log(error);
            }
        }
        getCategories();
    }, []);

    return (
        <div style={{ background: "#f8f9ff" }}>

            {/* ===== HERO ===== */}
            <section style={{
                background: "linear-gradient(135deg, #0a0a2e, #1a1a6e, #4a0080)",
                padding: "80px 0",
                color: "#fff"
            }}>
                <div className="container">
                    <div className="row align-items-center g-5">

                        <div className="col-md-6">
                            <p style={{ color: "#a78bfa", letterSpacing: "3px", fontSize: "13px", fontWeight: "bold", textTransform: "uppercase" }}>
                                Welcome To Our Store
                            </p>
                            <h1 className="display-4 fw-bold mb-3">
                                Shop The Best <span style={{ color: "#a78bfa" }}>Products</span> Online
                            </h1>
                            <p style={{ color: "#cbd5e1", lineHeight: "1.8", fontSize: "16px", marginBottom: "32px" }}>
                                Discover thousands of products across all categories.
                                Fast delivery, easy returns, and the best prices guaranteed.
                            </p>
                            <div className="d-flex gap-3">
                                <Link
                                    to="/Products"
                                    className="btn btn-lg px-4 fw-bold"
                                    style={{ background: "#7c3aed", color: "#fff", border: "none" }}
                                >
                                    Shop Now →
                                </Link>
                                {!token && (
                                    <Link
                                        to="/register"
                                        className="btn btn-lg px-4"
                                        style={{ border: "2px solid #a78bfa", color: "#a78bfa", background: "transparent" }}
                                    >
                                        Join Free
                                    </Link>
                                )}
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div style={{ borderRadius: "20px", overflow: "hidden" }}>
                                <img
                                    src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600"
                                    alt="Shopping"
                                    style={{ width: "100%", height: "400px", objectFit: "cover" }}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* ===== CATEGORIES ===== */}
            <section style={{ padding: "60px 0" }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <p style={{ color: "#7c3aed", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "2px", fontSize: "13px" }}>
                            Browse By
                        </p>
                        <h2 className="fw-bold" style={{ color: "#0a0a2e" }}>Top Categories</h2>
                    </div>
                    <div className="row g-3 justify-content-center">
                        {categories.map((cat) => (
                            <div key={cat._id} className="col-6 col-md-2">
                                <Link to={`/Products?category=${cat._id}`} className="text-decoration-none">
                                    <div
                                        className="text-center p-3 rounded-4"
                                        style={{ background: "#f3f0ff", cursor: "pointer", transition: "transform 0.2s" }}
                                        onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
                                        onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                                    >
                                        <div style={{ width: "70px", height: "70px", borderRadius: "50%", overflow: "hidden", margin: "0 auto 10px" }}>
                                            <img
                                                src={cat.image}
                                                alt={cat.name}
                                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                            />
                                        </div>
                                        <p className="fw-bold mb-0 small" style={{ color: "#0a0a2e" }}>{cat.name}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FEATURED PRODUCTS ===== */}
            <section style={{ padding: "60px 0", background: "#fff" }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <p style={{ color: "#7c3aed", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "2px", fontSize: "13px" }}>
                            Hand Picked
                        </p>
                        <h2 className="fw-bold" style={{ color: "#0a0a2e" }}>Featured Products</h2>
                    </div>
                    <div className="row g-4">
                        {featuredProducts.map((product) => (
                            <div key={product._id} className="col-md-3">
                                <Link to={`/Products/ProductDetails/${product._id}`} className="text-decoration-none">
                                    <div className="rounded-4 overflow-hidden shadow-sm bg-white h-100">
                                        <img
                                            src={product.imageCover}
                                            alt={product.title}
                                            style={{ width: "100%", height: "200px", objectFit: "cover" }}
                                        />
                                        <div className="p-3">
                                            <h6 className="fw-bold text-dark mb-1">
                                                {product.title.split(' ').slice(0, 4).join(' ')}
                                            </h6>
                                            <div className="d-flex justify-content-between align-items-center mt-2">
                                                <span className="fw-bold" style={{ color: "#7c3aed" }}>
                                                    {product.price} EGP
                                                </span>
                                                <span className="text-warning small">
                                                    ★ {product.ratingsAverage}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-5">
                        <Link
                            to="/Products"
                            className="btn btn-lg px-5 fw-bold"
                            style={{ background: "#7c3aed", color: "#fff", border: "none" }}
                        >
                            View All Products →
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== BOTTOM BANNER ===== */}
            {!token && (
                <section style={{
                    background: "linear-gradient(135deg, #0a0a2e, #4a0080)",
                    padding: "60px 0",
                    color: "#fff",
                    textAlign: "center"
                }}>
                    <div className="container">
                        <h2 className="fw-bold mb-3">Ready to start shopping?</h2>
                        <p style={{ color: "#cbd5e1", marginBottom: "32px" }}>
                            Join thousands of happy customers today
                        </p>
                        <Link
                            to="/register"
                            className="btn btn-lg px-5 fw-bold"
                            style={{ background: "#7c3aed", color: "#fff", border: "none" }}
                        >
                            Create Account →
                        </Link>
                    </div>
                </section>
            )}

        </div>
    );
}