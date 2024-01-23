import React, { useEffect } from "react";
import "./BackToTopButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const BackToTopButton = () => {
    useEffect(() => {
        window.addEventListener("scroll", () => {
            const button = document.querySelector(".backToTopButton");
            if (!button) return;
            if (window.scrollY > 300) {
                button.classList.add("backToTopButton--show");
            } else {
                button.classList.remove("backToTopButton--show");
            }
        });

        return () => {
            window.removeEventListener("scroll", () => {});
        };
    }, []);

    return (
        <button className="backToTopButton" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <FontAwesomeIcon icon={faChevronUp} className="backToTopButton__icon" />
        </button>
    );
}

export default BackToTopButton;