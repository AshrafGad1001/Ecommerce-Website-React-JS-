export function About() {
    return (
        <>
            <section id="about" className="py-5 bg-light">
                <div className="container">

                    <div className="row align-items-center">

                        <div className="col-md-6">
                            <h2 className="fw-bold mb-3">About Us</h2>
                            <p className="text-muted">
                                We are a team of developers passionate about
                                teaching React from zero to hero in a simple
                                and practical way.
                            </p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>

                        <div className="col-md-6">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                                alt="About Us"
                                className="img-fluid rounded shadow"
                            />
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}