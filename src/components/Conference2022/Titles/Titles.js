import React from "react";
import style from "./Titles.module.css";
import plane from "../media/plane.png";

//const Countdown = React.lazy(() => import("../CountdownComponent/Countdown"));

export default function Titles() {
    return (
        <div className={style.titlesWrapper}>
            <div className={style.titles}>
                <div className={style.text}>
                    <div className={style.future}>VENTURE</div>
                    <div className={style.future}>CITY</div>
                    <img src={plane} className={style.plane}></img>
                </div>
            </div>
            
        </div>
        
    );
}
