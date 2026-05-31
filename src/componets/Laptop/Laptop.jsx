import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';




export default function Laptop() {
    return (
        <div>
            <h4 className="fw-bold text-dark mb-4">Laptops</h4>

            <div className="row g-3">

                <div className="col-md-4">
                    <div className="card border-0 shadow-sm rounded-4 p-3 text-center">
                        <div
                            className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                            style={{ width: "60px", height: "60px", borderRadius: "12px", background: "#ede9fe" }}
                        >
                            <FontAwesomeIcon icon={faLaptop} style={{ fontSize: "24px", color: "#7c3aed" }} />
                        </div>
                        <p className="fw-bold text-dark mb-1">MacBook</p>
                        <p className="text-secondary small mb-0">Pro M3, Air M2, Pro M1</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card border-0 shadow-sm rounded-4 p-3 text-center">
                        <div
                            className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                            style={{ width: "60px", height: "60px", borderRadius: "12px", background: "#ede9fe" }}
                        >
                            <FontAwesomeIcon icon={faLaptop} style={{ fontSize: "24px", color: "#7c3aed" }} />
                        </div>
                        <p className="fw-bold text-dark mb-1">Dell</p>
                        <p className="text-secondary small mb-0">XPS 15, Inspiron, G15</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card border-0 shadow-sm rounded-4 p-3 text-center">
                        <div
                            className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                            style={{ width: "60px", height: "60px", borderRadius: "12px", background: "#ede9fe" }}
                        >
                            <FontAwesomeIcon icon={faLaptop} style={{ fontSize: "24px", color: "#7c3aed" }} />
                        </div>
                        <p className="fw-bold text-dark mb-1">HP</p>
                        <p className="text-secondary small mb-0">Pavilion, Envy, Omen</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card border-0 shadow-sm rounded-4 p-3 text-center">
                        <div
                            className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                            style={{ width: "60px", height: "60px", borderRadius: "12px", background: "#ede9fe" }}
                        >
                            <FontAwesomeIcon icon={faLaptop} style={{ fontSize: "24px", color: "#7c3aed" }} />
                        </div>
                        <p className="fw-bold text-dark mb-1">Lenovo</p>
                        <p className="text-secondary small mb-0">ThinkPad, IdeaPad, Legion</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card border-0 shadow-sm rounded-4 p-3 text-center">
                        <div
                            className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                            style={{ width: "60px", height: "60px", borderRadius: "12px", background: "#ede9fe" }}
                        >
                            <FontAwesomeIcon icon={faLaptop} style={{ fontSize: "24px", color: "#7c3aed" }} />
                        </div>
                        <p className="fw-bold text-dark mb-1">Asus</p>
                        <p className="text-secondary small mb-0">ROG, ZenBook, VivoBook</p>
                    </div>
                </div>

            </div>
        </div>
    )
}