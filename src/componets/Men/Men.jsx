import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson } from '@fortawesome/free-solid-svg-icons';

export function Men() {
    return (
        <div>
            <h4 className="fw-bold text-dark mb-4">Men's Clothes</h4>

            <div className="row g-3">

                <div className="col-md-4">
                    <div className="card border-0 shadow-sm rounded-4 p-3 text-center">
                        <div
                            className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                            style={{ width: "60px", height: "60px", borderRadius: "12px", background: "#ede9fe" }}
                        >
                            <FontAwesomeIcon icon={faPerson} style={{ fontSize: "24px", color: "#7c3aed" }} />
                        </div>
                        <p className="fw-bold text-dark mb-1">T-Shirts</p>
                        <p className="text-secondary small mb-0">Casual, Polo, Graphic</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card border-0 shadow-sm rounded-4 p-3 text-center">
                        <div
                            className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                            style={{ width: "60px", height: "60px", borderRadius: "12px", background: "#ede9fe" }}
                        >
                            <FontAwesomeIcon icon={faPerson} style={{ fontSize: "24px", color: "#7c3aed" }} />
                        </div>
                        <p className="fw-bold text-dark mb-1">Jeans</p>
                        <p className="text-secondary small mb-0">Slim, Regular, Wide</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card border-0 shadow-sm rounded-4 p-3 text-center">
                        <div
                            className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                            style={{ width: "60px", height: "60px", borderRadius: "12px", background: "#ede9fe" }}
                        >
                            <FontAwesomeIcon icon={faPerson} style={{ fontSize: "24px", color: "#7c3aed" }} />
                        </div>
                        <p className="fw-bold text-dark mb-1">Jackets</p>
                        <p className="text-secondary small mb-0">Leather, Denim, Winter</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card border-0 shadow-sm rounded-4 p-3 text-center">
                        <div
                            className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                            style={{ width: "60px", height: "60px", borderRadius: "12px", background: "#ede9fe" }}
                        >
                            <FontAwesomeIcon icon={faPerson} style={{ fontSize: "24px", color: "#7c3aed" }} />
                        </div>
                        <p className="fw-bold text-dark mb-1">Shoes</p>
                        <p className="text-secondary small mb-0">Sneakers, Formal, Boots</p>
                    </div>
                </div>

            </div>
        </div>
    )
}