import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faHeadphones, faTabletScreenButton } from '@fortawesome/free-solid-svg-icons';

export default function SmartAccessories() {
    return (
        <div>
            <h4 className="fw-bold text-dark mb-4">Smart Accessories</h4>

            <div className="row g-3">

                <div className="col-md-4">
                    <div className="card border-0 shadow-sm rounded-4 p-3 text-center">
                        <div
                            className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                            style={{ width: "60px", height: "60px", borderRadius: "12px", background: "#ede9fe" }}
                        >
                            <FontAwesomeIcon icon={faClock} style={{ fontSize: "24px", color: "#7c3aed" }} />
                        </div>
                        <p className="fw-bold text-dark mb-1">Smart Watch</p>
                        <p className="text-secondary small mb-0">Apple, Samsung, Xiaomi</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card border-0 shadow-sm rounded-4 p-3 text-center">
                        <div
                            className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                            style={{ width: "60px", height: "60px", borderRadius: "12px", background: "#ede9fe" }}
                        >
                            <FontAwesomeIcon icon={faHeadphones} style={{ fontSize: "24px", color: "#7c3aed" }} />
                        </div>
                        <p className="fw-bold text-dark mb-1">AirPods</p>
                        <p className="text-secondary small mb-0">Apple, Sony, JBL</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card border-0 shadow-sm rounded-4 p-3 text-center">
                        <div
                            className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                            style={{ width: "60px", height: "60px", borderRadius: "12px", background: "#ede9fe" }}
                        >
                            <FontAwesomeIcon icon={faTabletScreenButton} style={{ fontSize: "24px", color: "#7c3aed" }} />
                        </div>
                        <p className="fw-bold text-dark mb-1">Tablet</p>
                        <p className="text-secondary small mb-0">iPad, Samsung, Lenovo</p>
                    </div>
                </div>

            </div>
        </div>
    )
}