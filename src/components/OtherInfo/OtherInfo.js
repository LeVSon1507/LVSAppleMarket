import React from "react";
import './OtherInfo.css'

function OtherInfo() {
    return (
        <div className="container-fluid">
            <div className="row row1Custom container">
                <div className="col-4">
                    <ul>
                        <li><h5>FREE SHIPPING</h5></li>
                        <li><p>Free shipping worldwide</p></li>
                    </ul>
                </div>
                <div className="col-4">
                    <ul>
                        <li><h5>24 X 7 SERVICE</h5></li>
                        <li><p>Free shipping worldwide</p></li>
                    </ul>
                </div>
                <div className="col-4">
                    <ul>
                        <li><h5>FESTIVAL OFFER</h5></li>
                        <li><p>Free shipping worldwide</p></li>
                    </ul>
                </div>
            </div>
            <div className="row row2Custom">
                <div className="col-md-6 titGr col-12">
                    <ul>
                        <li><h5>LET'S BE FRIENDS!</h5></li>
                        <li><p>Nisi nisi tempor consequot loboris nisi.</p></li>
                    </ul>
                </div>
                <div className="col-md-6 emGr col-12">
                    <input type="text" className="emIp" placeholder="Enter your email address" />
                    <button className="subscribe">Subscribe</button>
                </div>
            </div>
        </div>
    );
}

export default OtherInfo;
