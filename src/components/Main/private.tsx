

import React from "react";
import { Icons } from "../Icons";



const PrivateSection = () => {
    return(
        <div className="private-sec">
            <h2 className="private-page-title">Home Page</h2>
            <div className="background-img-private">
                <div className="background-content">
                    <h3>Private Banker</h3>
                    <p>Your trusted partner in financial advice and operations</p>
                    <button className="background-button">
                        LEARN MORE
                    </button>
                </div>
                
            </div>
            <div>
                <p className="private-text">Subscribe to the TBC concept package and enjoy both banking and non-banking advantages.</p>
            </div>
        </div>
    )
}

export default PrivateSection;