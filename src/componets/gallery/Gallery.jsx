export function Gallery() {
    return (
        <>
            <section id="gallery" className="py-5 bg-light">

                <div className="container">

                    <h2 className="text-center fw-bold mb-4">Gallery</h2>

                    <div className="row g-3">

                        <div className="col-md-4">
                            <div style={{ height: "250px", overflow: "hidden", borderRadius: "8px" }}>
                                <img
                                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                                    alt="Nature 1"
                                    className="img-fluid shadow"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div style={{ height: "250px", overflow: "hidden", borderRadius: "8px" }}>
                                <img
                                    src="https://images.unsplash.com/photo-1501854140801-50d01698950b"
                                    alt="Nature 2"
                                    className="img-fluid shadow"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div style={{ height: "250px", overflow: "hidden", borderRadius: "8px" }}>
                                <img
                                    src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
                                    alt="Nature 3"
                                    className="img-fluid shadow"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div style={{ height: "250px", overflow: "hidden", borderRadius: "8px" }}>
                                <img
                                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
                                    alt="Nature 4"
                                    className="img-fluid shadow"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div style={{ height: "250px", overflow: "hidden", borderRadius: "8px" }}>
                                <img
                                    src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e"
                                    alt="Nature 5"
                                    className="img-fluid shadow"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div style={{ height: "250px", overflow: "hidden", borderRadius: "8px" }}>
                                <img
                                    src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f"
                                    alt="Nature 6"
                                    className="img-fluid shadow"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </div>
                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}