import React from "react";
import "./Poster.css";
import backLayer from "../media/back.png";
import middleLayer from "../media/middle.png";
import frontLayer from "../media/front.png";
import Speakers from "../Speakers/Speakers";
import Footer from "../Footer/Footer";

export default function Poster() {
    return (
        <>
            <div className="parallax_layer parallax_layer-back">
                <div className="layer back">
                    <img src={backLayer} alt="" />
                </div>
            </div>
            <div className="parallax_layer parallax_layer-middle">
                <div className="layer middle">
                    <img src={middleLayer} alt="" />
                </div>
            </div>
            <div className="parallax_layer parallax_layer-front">
                <div className="layer front">
                    <img src={frontLayer} alt="" />
                    <Speakers />
                    <Footer />
                </div>
            </div>
        </>
    );
}
