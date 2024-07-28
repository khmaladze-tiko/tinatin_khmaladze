import React from "react";
import { Icons } from "../Icons";



const DigitalBankSection = () => {
    return(
        <div className="digital-bank-sec">
           <div className="digital-text">
                <h2>Digital Bank</h2>
                <p>Perform banking transactions remotely via Digital Bank</p>
                <div className="market">
                    <a className="box-market">
                        <Icons.googlePlay/>
                    </a>
                    <a className="box-market">
                        <Icons.appStore/>
                    </a>
                </div>
           </div>
           <div className="digital-img">
            
           </div>
        </div>
    )
}

export default DigitalBankSection;