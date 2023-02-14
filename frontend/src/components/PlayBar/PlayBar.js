import React from "react";
import "./PlayBar.css";

function PlayBar() {
    return (
        <div className="playBar">
            <div className="playBarLeft">
                <img className="albumArt" src="https://images.genius.com/f429f9daba03f2e7756d237603e97b93.700x700x1.jpg" alt="album photo" />
                <div className="songInfo">
                    <h4>Aye</h4>
                    <p>G Herbo</p>
                </div>
            </div>
            <div className="playBarCenter">
                <div className="playBarCenterLeft">
                    <i className="fas fa-random"></i>
                    <i className="fas fa-step-backward"></i>
                    <i className="fas fa-play"></i>
                    <i className="fas fa-step-forward"></i>
                    <i className="fas fa-redo"></i>
                </div>
                <div className="playBarCenterRight">
                    <i className="fas fa-list"></i>
                </div>
            </div>
            <div className="playBarRight">
                <i className="fas fa-volume-down"></i>
                <i className="fas fa-volume-up"></i>
            </div>
        </div>
    )
}

export default PlayBar