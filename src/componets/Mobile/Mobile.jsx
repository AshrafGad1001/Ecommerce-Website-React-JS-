import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons';

export default function Mobile() {
    return (
        <div>
            <h4 className="fw-bold text-dark mb-4">Mobile Phones</h4>

            <div className="row g-3">

                <div className="col-md-4">
                    <div className="card border-0 shadow-sm rounded-4 p-3 text-center">
                        <div
                            className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                            style={{ width: "60px", height: "60px", borderRadius: "12px", background: "#ede9fe" }}
                        >
                            <FontAwesomeIcon icon={faMobileScreen} style={{ fontSize: "24px", color: "#7c3aed" }} />
                        </div>
                        <p className="fw-bold text-dark mb-1">iPhone</p>
                        <p className="text-secondary small mb-0">iPhone 15, 14, 13</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card border-0 shadow-sm rounded-4 p-3 text-center">
                        <div
                            className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                            style={{ width: "60px", height: "60px", borderRadius: "12px", background: "#ede9fe" }}
                        >
                            <FontAwesomeIcon icon={faMobileScreen} style={{ fontSize: "24px", color: "#7c3aed" }} />
                        </div>
                        <p className="fw-bold text-dark mb-1">Samsung</p>
                        <p className="text-secondary small mb-0">S24, S23, A54</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card border-0 shadow-sm rounded-4 p-3 text-center">
                        <div
                            className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                            style={{ width: "60px", height: "60px", borderRadius: "12px", background: "#ede9fe" }}
                        >
                            <FontAwesomeIcon icon={faMobileScreen} style={{ fontSize: "24px", color: "#7c3aed" }} />
                        </div>
                        <p className="fw-bold text-dark mb-1">Xiaomi</p>
                        <p className="text-secondary small mb-0">14 Pro, 13T, Redmi</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card border-0 shadow-sm rounded-4 p-3 text-center">
                        <div
                            className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                            style={{ width: "60px", height: "60px", borderRadius: "12px", background: "#ede9fe" }}
                        >
                            <FontAwesomeIcon icon={faMobileScreen} style={{ fontSize: "24px", color: "#7c3aed" }} />
                        </div>
                        <p className="fw-bold text-dark mb-1">Huawei</p>
                        <p className="text-secondary small mb-0">P60, Mate 50, Nova</p>
                    </div>
                </div>

            </div>
        </div>
    )
}