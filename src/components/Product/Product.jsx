import { useContext, useState } from 'react';
import { cartContext } from '../../Context/cartContext';
import { Link } from 'react-router-dom';

export default function Product({ p }) {

    const { addToCart } = useContext(cartContext);
    const [isLoading, setIsLoading] = useState(false);

    async function handleAddToCart() {
        setIsLoading(true);
        await addToCart(p._id);
        setIsLoading(false);
    }

    return (
        <div className="border-0 shadow-sm rounded-4 h-100">

            <Link to={`/Products/ProductDetails/${p._id}`} className="text-decoration-none">
                <div style={{ height: "220px", overflow: "hidden" }} className="rounded-top-4">
                    <img
                        src={p.imageCover}
                        alt={p.title}
                        className="img-fluid"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>
            </Link>


            <div className="card-body d-flex flex-column gap-2 p-3">
                <span className="badge bg-primary bg-opacity-10 text-primary" style={{ width: "fit-content" }}>
                    {p.category?.name}
                </span>
                <h6 className="fw-bold text-dark mb-0">
                    {p.title.split(' ').slice(0, 4).join(' ')}
                </h6>
                <div className="d-flex align-items-center gap-1">
                    <span className="text-warning">★</span>
                    <span className="small text-secondary">{p.ratingsAverage}</span>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-auto">
                    <span className="fw-bold text-primary fs-5">{p.price} EGP</span>
                    <button
                        onClick={handleAddToCart}
                        disabled={isLoading}
                        style={{
                            background: "#0d6efd",
                            color: "#fff",
                            border: "none",
                            borderRadius: "6px",
                            padding: "4px 12px",
                            fontSize: "14px",
                            cursor: "pointer"
                        }}
                    >
                        {isLoading ? "Adding..." : "Add to Cart"}
                    </button>
                </div>
            </div>

        </div>
    );
}