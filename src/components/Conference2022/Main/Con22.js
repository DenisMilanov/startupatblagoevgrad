import React from "react";
import "./Conf22.css";
import Poster from "../Poster/Poster";
//import Panels from "../Speakers/Panels";
import Titles from "../Titles/Titles";
//import MediaPartners from "../MediaPartnersComponent/MediaPartners";

export default function Conf2022() {
    return (
        <div className="conf2022">
            <div className="parallax-wrapper">
                <div className="parallax">
                    <Titles />
                    <Poster />
            </div>
            </div>
        </div>
    );
}