import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCartShopping, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function ProductDetails() {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null); 

    useEffect(() => {
        async function getProduct() {
            try {
                const { data } = await axios.get(
                    `https://ecommerce.routemisr.com/api/v1/products/${id}`
                );
                setProduct(data.data);
                setSelectedImage(data.data.imageCover);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        getProduct();
    }, [id]);

    if (loading) {
        return (
            <div className="min-vh-100 d-flex align-items-center justify-content-center">
                <FontAwesomeIcon
                    icon={faSpinner}
                    spin
                    style={{ fontSize: "40px", color: "#7c3aed" }}
                />
            </div>
        );
    }

    
    if (!product) {
        return (
            <div className="min-vh-100 d-flex flex-column align-items-center justify-content-center gap-3">
                <h4 className="text-danger">Product Not Found!</h4>
                <Link to="/Products" className="btn btn-outline-secondary">
                    <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
                    Back To Products
                </Link>
            </div>
        );
    }

    return (
        <section className="py-5 bg-light min-vh-100">
            <div className="container">

                
                <Link to="/Products" className="btn btn-outline-secondary mb-4">
                    <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
                    Back To Products
                </Link>

                <div className="row g-5 align-items-center">

                    
                    <div className="col-md-6">
                        <div style={{
                            borderRadius: "16px",
                            overflow: "hidden",
                            boxShadow: "0 8px 30px rgba(74,0,128,0.15)"
                        }}>
                            
                            <img
                                src={selectedImage}
                                alt={product.title}
                                className="img-fluid"
                                style={{ width: "100%", height: "450px", objectFit: "cover" }}
                            />
                        </div>

                        
                        {product.images?.length > 0 && (
                            <div className="d-flex gap-2 mt-3 flex-wrap">
                                
                                <img
                                    src={product.imageCover}
                                    alt="cover"
                                    onClick={() => setSelectedImage(product.imageCover)}
                                    style={{
                                        width: "70px",
                                        height: "70px",
                                        objectFit: "cover",
                                        borderRadius: "10px",
                                        cursor: "pointer",
                                        border: selectedImage === product.imageCover
                                            ? "2px solid #7c3aed"
                                            : "2px solid #ede9fe"
                                    }}
                                />
                                
                                {product.images.map((img, i) => (
                                    <img
                                        key={i}
                                        src={img}
                                        alt={`image-${i}`}
                                        onClick={() => setSelectedImage(img)}
                                        style={{
                                            width: "70px",
                                            height: "70px",
                                            objectFit: "cover",
                                            borderRadius: "10px",
                                            cursor: "pointer",
                                            border: selectedImage === img
                                                ? "2px solid #7c3aed"
                                                : "2px solid #ede9fe"
                                        }}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    
                    <div className="col-md-6">

                        
                        <span
                            className="badge bg-primary bg-opacity-10 text-primary mb-3"
                            style={{ fontSize: "13px", padding: "8px 14px" }}
                        >
                            {product.category?.name}
                        </span>

                        
                        <h2 className="fw-bold text-dark mb-3">{product.title}</h2>

                        
                        <div className="d-flex align-items-center gap-2 mb-3">
                            <span className="text-warning fs-5">★</span>
                            <span className="fw-bold">{product.ratingsAverage}</span>
                            <span className="text-secondary small">
                                ({product.ratingsQuantity} reviews)
                            </span>
                        </div>

                        
                        <p className="text-secondary mb-4" style={{ lineHeight: "1.8" }}>
                            {product.description}
                        </p>

                        
                        {product.brand && (
                            <div className="d-flex align-items-center gap-2 mb-4">
                                <span className="fw-bold text-dark">Brand:</span>
                                <span className="text-secondary">{product.brand.name}</span>
                            </div>
                        )}

                        {/* Price */}
                        <div className="d-flex align-items-center gap-3 mb-4">
                            <span className="fw-bold fs-3" style={{ color: "#7c3aed" }}>
                                {product.price} EGP
                            </span>
                            {product.priceAfterDiscount > 0 && (
                                <span className="text-decoration-line-through text-secondary fs-5">
                                    {product.priceAfterDiscount} EGP
                                </span>
                            )}
                        </div>

                        <button
                            className="btn btn-lg w-100"
                            style={{
                                background: "#7c3aed",
                                color: "#fff",
                                borderRadius: "12px"
                            }}
                        >
                            <FontAwesomeIcon icon={faCartShopping} className="me-2" />
                            Add To Cart
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
}