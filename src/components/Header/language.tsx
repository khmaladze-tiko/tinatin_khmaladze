import React from "react";
import { Icons } from "../Icons";

type LanguageProps = {
    extraClass?: string;
};

const Language: React.FC<LanguageProps> = ({ extraClass = "" }) => {
    return (
        <div className={`extra ${extraClass}`}>
            <div className="language">
                <div className="languageIcon">
                    <Icons.language/>
                </div>
                <p>Eng</p>
            </div>
        </div>
    );
};

export default Language;