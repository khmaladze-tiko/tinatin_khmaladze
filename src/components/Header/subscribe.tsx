import React from "react";
import { Icons } from "../Icons";

const Subscribe = () => {
    return(
        <div className="extra1">
            <a className="extra1__subscribe">
                <div className="extra1__subscribe-icon">
                    <Icons.arrow/>
                </div>
                <div className="extra1__subscribe-text">
                    SUBSCRIBE TO A PACKAGE
                </div>
            </a>
            

        </div>
    )
}

export default Subscribe;