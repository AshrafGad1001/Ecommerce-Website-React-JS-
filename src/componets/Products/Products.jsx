import axios from "axios";
import { useState, useEffect } from "react";
import Product from './../product/Product';


export default function Products() {


    const [products, setProducts] = useState([])



    useEffect(() => {

        async function getProducts() {
            try {
                const { data } = await axios('https://ecommerce.routemisr.com/api/v1/products');
                setProducts(data.data);
                console.log(data.data);
            } catch (error) {
                console.log(error);
            }
        }

        getProducts()
    }, []);






    return (
        <section className="py-5 bg-light min-vh-100">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold text-dark">
                        Latest <span className="text-primary">Products</span>
                    </h2>
                </div>



                <div className="row g-4">
                    {

                        products.length == 0 ? <div className="d-flex justify-content-center align-items-center min-vh-100">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div> :
                            products.map((product) => (
                                <div key={product._id} className="col-md-3">
                                    <Product p={product} />
                                </div>
                            ))


                    }
                </div>

            </div>
        </section>
    )











    // return (
    //     <section className="py-5 bg-light min-vh-100">
    //         <div className="container">

    //             {/* Header */}
    //             <div className="text-center mb-5">
    //                 <p className="fw-bold text-uppercase text-primary mb-2 small">
    //                     Our Store
    //                 </p>
    //                 <h2 className="display-5 fw-bold text-dark">
    //                     Latest <span className="text-primary">Products</span>
    //                 </h2>
    //             </div>

    //             {/* Products */}
    //             <div className="row g-4">
    //                 {products.map(product => (
    //                     <div key={product._id} className="col-md-3">
    //                         <div className="card border-0 shadow-sm rounded-4 h-100">

    //                             {/* Image */}
    //                             <div style={{ height: "220px", overflow: "hidden" }} className="rounded-top-4">
    //                                 <img
    //                                     src={product.imageCover}
    //                                     alt={product.title}
    //                                     className="img-fluid"
    //                                     style={{ width: "100%", height: "100%", objectFit: "cover" }}
    //                                 />
    //                             </div>

    //                             <div className="card-body d-flex flex-column gap-2 p-3">

    //                                 {/* Category */}
    //                                 <span className="badge bg-primary bg-opacity-10 text-primary w-fit" style={{ width: "fit-content" }}>
    //                                     {product.category?.name}
    //                                 </span>

    //                                 {/* Title */}
    //                                 <h6 className="fw-bold text-dark mb-0">
    //                                     {product.title.split(' ').slice(0, 4).join(' ')}
    //                                 </h6>

    //                                 {/* Rating */}
    //                                 <div className="d-flex align-items-center gap-1">
    //                                     <span className="text-warning">★</span>
    //                                     <span className="small text-secondary">{product.ratingsAverage}</span>
    //                                 </div>

    //                                 {/* Price & Button */}
    //                                 <div className="d-flex align-items-center justify-content-between mt-auto">
    //                                     <span className="fw-bold text-primary fs-5">
    //                                         {product.price} EGP
    //                                     </span>
    //                                     <button className="btn btn-primary btn-sm rounded-3">
    //                                         Add To Cart
    //                                     </button>
    //                                 </div>

    //                             </div>

    //                         </div>
    //                     </div>
    //                 ))}
    //             </div>

    //         </div>
    //     </section>
    // )
}
