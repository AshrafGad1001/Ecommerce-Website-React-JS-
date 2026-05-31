import { useEffect, useState, useContext } from "react";
import { cartContext } from "../../Context/cartContext";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Cart() {

    const { setCartCount } = useContext(cartContext);
    const [cartData, setCartData] = useState(null);
    const [loading, setLoading] = useState(true);



    async function removeItem(productId) {
        try {
            const { data } = await axios.delete(
                `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
                { headers: { token: localStorage.getItem("userToken") } }
            );
            setCartData(data);
            setCartCount(data.numOfCartItems);
        } catch (error) {
            console.log(error);
        }
    }

    async function updateQuantity(productId, count) {
        if (count < 1) return;
        try {
            const { data } = await axios.put(
                `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
                { count },
                { headers: { token: localStorage.getItem("userToken") } }
            );
            setCartData(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {

        async function fetchCart() {
            try {
                const { data } = await axios.get(
                    "https://ecommerce.routemisr.com/api/v1/cart",
                    { headers: { token: localStorage.getItem("userToken") } }
                );
                setCartData(data);
                setCartCount(data.numOfCartItems);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchCart();
    }, []);

    if (loading) {
        return (
            <div className="min-vh-100 d-flex align-items-center justify-content-center">
                <div className="spinner-border text-primary" role="status" />
            </div>
        );
    }

    if (!cartData || cartData.numOfCartItems === 0) {
        return (
            <div className="min-vh-100 d-flex flex-column align-items-center justify-content-center gap-3">
                <h4 className="text-secondary">Your cart is empty</h4>
                <Link to="/Products" className="btn btn-primary px-4">
                    Browse Products
                </Link>
            </div>
        );
    }

    return (
        <section className="py-5 bg-light min-vh-100">
            <div className="container">

                <h2 className="fw-bold mb-4">
                    My Cart
                    <span className="fs-5 fw-normal text-secondary ms-2">
                        ({cartData.numOfCartItems} items)
                    </span>
                </h2>

                <div className="row g-4">

                    {/* Products */}
                    <div className="col-lg-8">
                        <div className="d-flex flex-column gap-3">
                            {cartData.data.products.map((item) => (
                                <div key={item._id} className="bg-white rounded-4 p-3 shadow-sm d-flex gap-3 align-items-center">

                                    {/* Image */}
                                    <img
                                        src={item.product.imageCover}
                                        alt={item.product.title}
                                        style={{ width: "90px", height: "90px", objectFit: "cover", borderRadius: "10px" }}
                                    />

                                    {/* Info */}
                                    <div className="flex-grow-1">
                                        <h6 className="fw-bold mb-1">
                                            {item.product.title.split(" ").slice(0, 4).join(" ")}
                                        </h6>
                                        <p className="text-primary fw-bold mb-2">
                                            {item.price} EGP
                                        </p>

                                        {/* Quantity */}
                                        <div className="d-flex align-items-center gap-2">
                                            <button
                                                onClick={() => updateQuantity(item.product._id, item.count - 1)}
                                                style={{ width: "28px", height: "28px", border: "1px solid #dee2e6", borderRadius: "6px", background: "#fff", cursor: "pointer" }}
                                            >
                                                −
                                            </button>
                                            <span className="fw-bold">{item.count}</span>
                                            <button
                                                onClick={() => updateQuantity(item.product._id, item.count + 1)}
                                                style={{ width: "28px", height: "28px", border: "1px solid #dee2e6", borderRadius: "6px", background: "#fff", cursor: "pointer" }}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    {/* Total + Remove */}
                                    <div className="d-flex flex-column align-items-end gap-2">
                                        <span className="fw-bold text-dark">
                                            {item.price * item.count} EGP
                                        </span>
                                        <button
                                            onClick={() => removeItem(item.product._id)}
                                            style={{ background: "none", border: "none", color: "#dc3545", cursor: "pointer", fontSize: "13px" }}
                                        >
                                            Remove
                                        </button>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="col-lg-4">
                        <div className="bg-white rounded-4 p-4 shadow-sm">
                            <h5 className="fw-bold mb-3">Order Summary</h5>

                            <div className="d-flex justify-content-between mb-2 text-secondary">
                                <span>Items ({cartData.numOfCartItems})</span>
                                <span>{cartData.data.totalCartPrice} EGP</span>
                            </div>

                            <hr />

                            <div className="d-flex justify-content-between fw-bold fs-5 mb-4">
                                <span>Total</span>
                                <span className="text-primary">{cartData.data.totalCartPrice} EGP</span>
                            </div>

                            <button
                                className="w-100 py-2 fw-bold text-white rounded-3"
                                style={{ background: "#7c3aed", border: "none", fontSize: "16px", cursor: "pointer" }}
                            >
                                Checkout
                            </button>

                            <Link to="/Products" className="btn btn-outline-secondary w-100 mt-2">
                                Continue Shopping
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}