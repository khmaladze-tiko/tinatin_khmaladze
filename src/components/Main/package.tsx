import React from "react";
import { Icons } from "../Icons";

const PackageSection = () => {
  return (
    <div className="package-sec">
      <div className="package-title">
        <h2>Select a Package</h2>
      </div>
      <div className="package-flex">
        <div className="package-cards">
          <div className="package-digital">
            <div className="package-content">
                <h3 >Digital</h3>
                <a>
                <Icons.arrow />
                <p>READ MORE</p>
                </a>
            </div>
          </div>
          <div className="package-premium">
            <div className="package-content">
                <h3>Premium</h3>
                <a>
                <Icons.arrow />
                <p>READ MORE</p>
                </a>
            </div>
          </div>
        </div>
        <div className="package-last">
            <div className="package-content">
                <h3>360</h3>
                <a>
                    <Icons.arrow />
                    <p>READ MORE</p>
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PackageSection;
