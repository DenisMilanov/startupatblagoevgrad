import React from "react";
import "./Giveaway.css";

export default function Giveaway() {
    return (
        <div>
            <h2>  Get a chance to win iPad 5 Air!</h2>
            <article class="project-tablet">
                
            <figure class="ipad">
                <input type="radio" name="btn" id="layout" checked="checked"/>
                <label for="layout"></label>
                <input type="radio" name="btn" id="info"/>
                <label for="info"></label>
                <div class="screen-tablet">
                <img src="http://hornebom.com/images/ipad/ipad_hh.jpg" alt="" class="page"/>
                </div>
                <figcaption class="caption">
                <p>1. Buy a ticket for the conference from out booth in ABF and tell us your full name!</p>
                <p>2. Follow us on Instagram!</p>
                <p>3. Stay until the end of the conference when the winner will be announced!</p>
                {/* <nav class="social">
                    <ul>
                        <li><a href="https://www.facebook.com/StartUPBlagoevgrad/" class="facebook"></a></li>
                        <li><a href="https://www.instagram.com/startupblagoevgrad/?hl=bg" class="instagram"></a></li>
                        <li><a href="https://www.linkedin.com/company/startup-blagoevgrad/mycompany/" class="linkedin"></a></li>
                    </ul>
                </nav> */}
                </figcaption>
                </figure>
            </article>

            </div>
    );
}


