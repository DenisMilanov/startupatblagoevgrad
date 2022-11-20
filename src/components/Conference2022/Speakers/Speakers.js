import React, { useState } from "react";
import "./Speakers.css";
import panels from "./SpeakersData";

export default function Conf2021() {
    return (
        <div className="panels">
            <div className="panel-wrapper">
                <div className="panel-one">
                    {panels.panel1.map((speaker, index) => (
                        <SpeakerOne speaker={speaker} key={index} />
                    ))}
                </div>
            </div>

            <div className="panel-wrapper">
                <div className="panel-two">
                    {panels.panel2.map((speaker, index) => (
                        <SpeakerTwo speaker={speaker} key={index} />
                    ))}
                </div>
            </div>
            <div className="panel-wrapper">
                <div className="panel-three">
                    {panels.panel3.map((speaker, index) => (
                        <SpeakerThree speaker={speaker} key={index} />
                    ))}
                </div>
            </div>
            <div className="panel-wrapper">
                <div className="panel-four">
                    {panels.panel4.map((speaker, index) => (
                        <SpeakerFour speaker={speaker} key={index} />
                    ))}
                </div>
            </div>

        </div>
    );
}

function SpeakerOne({ speaker }) {
    const [showBio, setShowBio] = useState(false);
    const showHideBio = () => {
        setShowBio(!showBio);
    };

    return (
        <div className="speaker-one" onClick={showHideBio}>
            <div className="main">
                <img className="speaker-thumb" src={speaker.img} alt="" />
                <div>
                    <div className="body">
                        <div
                            className={`name ${
                                speaker.speakerName.split(" ")[0]
                            }`}
                        >
                            {speaker.speakerName}
                        </div>
                        
                    </div>
                    <div>{speaker.company}</div>
                    <div className="footer">
                        <i
                            className={
                                "fa fa-" +
                                socialButton(speaker.socialLink) +
                                "-square"
                            }
                            onClick={() =>
                                window.open(speaker.socialLink, "_blank")
                            }
                        ></i>
                        {speaker.bio &&
                            (showBio ? (
                                <i>View less</i>
                            ) : (
                                <i>View more</i>
                            ))}
                        
                    </div>

                    
                </div>
            </div>
            {showBio && (
                <div className="bio">
                    <div>
                        <b>{speaker.theme}</b>
                    </div>{" "}
                    {speaker.bio}
                </div>
            )}
        
        </div>
    );
}

function SpeakerTwo({ speaker }) {
    const [showBio, setShowBio] = useState(false);
    const showHideBio = () => {
        setShowBio(!showBio);
    };

    return (
        <div className="speaker-two" onClick={showHideBio}>
            <div className="main">
                <img className="speaker-thumb" src={speaker.img} alt="" />
                <div>
                    <div className="body">
                        <div
                            className={`name ${
                                speaker.speakerName.split(" ")[0]
                            }`}
                        >
                            {speaker.speakerName}
                        </div>
                    </div>
                    <div>{speaker.company}</div>
                    <div className="footer">
                        <i
                            className={
                                "fa fa-" +
                                socialButton(speaker.socialLink) +
                                "-square"
                            }
                            onClick={() =>
                                window.open(speaker.socialLink, "_blank")
                            }
                        ></i>
                        {speaker.bio &&
                            (showBio ? (
                                <i>View less</i>
                            ) : (
                                <i>View more</i>
                            ))}
                        
                    </div>
                    
                </div>
            </div>
            {showBio && (
                <div className="bio">
                    <div>
                        <b>{speaker.theme}</b>
                    </div>{" "}
                    {speaker.bio}
                </div>
            )}
        </div>
    );
}

function SpeakerThree({ speaker }) {
    const [showBio, setShowBio] = useState(false);
    const showHideBio = () => {
        setShowBio(!showBio);
    };

    return (
        <div className="speaker-three" onClick={showHideBio}>
            <div className="main">
                <img className="speaker-thumb" src={speaker.img} alt="" />
                <div>
                    <div className="body">
                        <div
                            className={`name ${
                                speaker.speakerName.split(" ")[0]
                            }`}
                        >
                            {speaker.speakerName}
                        </div>
                    </div>
                    <div>{speaker.company}</div>
                    <div className="footer">
                        <i
                            className={
                                "fa fa-" +
                                socialButton(speaker.socialLink) +
                                "-square"
                            }
                            onClick={() =>
                                window.open(speaker.socialLink, "_blank")
                            }
                        >
                        </i>
                        {speaker.bio &&
                            (showBio ? (
                                <i>View less</i>
                            ) : (
                                <i>View more</i>
                            ))}
                        
                    </div>
                    
                </div>
            </div>
            {showBio && (
                <div className="bio">
                    <div>
                        <b>{speaker.theme}</b>
                    </div>{" "}
                    {speaker.bio}
                </div>
            )}
        </div>
    );
}

function SpeakerFour({ speaker }) {
    const [showBio, setShowBio] = useState(false);
    const showHideBio = () => {
        setShowBio(!showBio);
    };

    return (
        <div className="speaker-four" onClick={showHideBio}>
            <div className="main">
                <img className="speaker-thumb" src={speaker.img} alt="" />
                <div>
                    <div className="body">
                        <div
                            className={`name ${
                                speaker.speakerName.split(" ")[0]
                            }`}
                        >
                            {speaker.speakerName}
                        </div>
                    </div>
                    <div>{speaker.company}</div>
                    <div className="footer">
                        <i
                            className={
                                "fa fa-" +
                                socialButton(speaker.socialLink) +
                                "-square"
                            }
                            onClick={() =>
                                window.open(speaker.socialLink, "_blank")
                            }
                        ></i>
                        {speaker.bio &&
                            (showBio ? (
                                <i>View less</i>
                            ) : (
                                <i>View more</i>
                            ))}
                        
                    </div>
                    
                </div>
            </div>
            {showBio && (
                <div className="bio">
                    <div>
                        <b>{speaker.theme}</b>
                    </div>{" "}
                    {speaker.bio}
                </div>
            )}
        </div>
    );
}

function socialButton(link) {
    if (link.includes("linkedin")) return "linkedin";
    if (link.includes("facebook")) return "facebook";
}