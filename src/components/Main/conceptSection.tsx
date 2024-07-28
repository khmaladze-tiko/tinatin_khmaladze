

import React from "react";
import { Icons } from "../Icons";



const ConceptSection = () => {
    return(
        <div className="concept-sec">
            <h2>Home Page</h2>
            <div className="background-img">
                <div className="background-content">
                    <h3>TBC Concept</h3>
                    <p>Personal banking services tailored to your needs and interests</p>
                    <button className="background-button">
                        <Icons.arrow/>
                        SUBSCRIBE
                    </button>
                </div>
                
            </div>
            <div>
                <p className="concept-text">Subscribe to the TBC concept package and enjoy both banking and non-banking advantages.</p>
            </div>
        </div>
    )
}

export default ConceptSection;