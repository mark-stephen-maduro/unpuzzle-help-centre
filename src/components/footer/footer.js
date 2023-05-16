import React from "react";
import { addClassesWhenInViewport } from "../../utils";

const Footer = () => {
    React.useEffect(() => {
        let elementToWatch = document.getElementById("footer");
        addClassesWhenInViewport(elementToWatch, ["animate__animated","animate__fadeInUp","animate__faster"]);    
    }, []);

    return (
        <div className="footer">
            <a id="footer" href="https://unpuzzle.com.au/unpuzzle-connect/" target="_blank" rel="noreferrer">
                © 2023 Unpuzzle Connect
            </a>
        </div>
    );
}

export default Footer;