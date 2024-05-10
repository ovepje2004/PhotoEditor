import React, {useEffect, useState} from "react";
import DrawSVG from "../image/pencil-ruler-soild.svg";

const Drawing = () => {
    return(
        <div className="edit-option" id="draw__btn">
            <img src={DrawSVG} />
            <div id="draw__config" className="config__window">
                <div className="config__inner">
                    <div className="config__window-title">
                        <p>그리기</p>
                    </div>
                    <div className="config__window-content">
                        <div className="set__drawing-weight">
                            <input id="weight-5" type="radio" name="weight" value="5" style={{"display" : "none"}} defaultChecked />
                            <label htmlFor="weight-5">
                                <div className="set__drawing-weight-box" id="set__weight-5"><div className="weight-dot"></div></div>
                            </label>
                            <input id="weight-10" type="radio" name="weight" value="10" style={{"display" : "none"}} />
                            <label htmlFor="weight-10">
                                <div className="set__drawing-weight-box" id="set__weight-10"><div className="weight-dot"></div></div>
                            </label>
                            <input id="weight-15" type="radio" name="weight" value="15" style={{"display" : "none"}} />
                            <label htmlFor="weight-15">
                                <div className="set__drawing-weight-box" id="set__weight-15"><div className="weight-dot"></div></div>
                            </label>
                            <input id="weight-20" type="radio" name="weight" value="20" style={{"display" : "none"}} />
                            <label htmlFor="weight-20">
                                <div className="set__drawing-weight-box" id="set__weight-20"><div className="weight-dot"></div></div>
                            </label>
                            <input id="weight-25" type="radio" name="weight" value="25" style={{"display" : "none"}} />
                            <label htmlFor="weight-25">
                                <div className="set__drawing-weight-box" id="set__weight-25"><div className="weight-dot"></div></div>
                            </label>
                            <input id="weight-30" type="radio" name="weight" value="30" style={{"display" : "none"}} />
                            <label htmlFor="weight-30">
                                <div className="set__drawing-weight-box" id="set__weight-30"><div className="weight-dot"></div></div>
                            </label>
                        </div>
                        <div className="set__drawing-color">
                            <input id="drawing-black" type="radio" name="drawing-color" value="#000000" style={{"display" : "none"}} defaultChecked />
                            <label htmlFor="drawing-black">
                                <div className="set__drawing-color-box" id="set__drawing-black"></div>
                            </label>
                            <input id="drawing-red" type="radio" name="drawing-color" value="#f44336" style={{"display" : "none"}} />
                            <label htmlFor="drawing-red">
                                <div className="set__drawing-color-box" id="set__drawing-red"></div>
                            </label>
                            <input id="drawing-pink" type="radio" name="drawing-color" value="#e91e63" style={{"display" : "none"}} />
                            <label htmlFor="drawing-pink">
                                <div className="set__drawing-color-box" id="set__drawing-pink"></div>
                            </label>
                            <input id="drawing-purple" type="radio" name="drawing-color" value="#9c27b0" style={{"display" : "none"}} />
                            <label htmlFor="drawing-purple">
                                <div className="set__drawing-color-box" id="set__drawing-purple"></div>
                            </label>
                            <input id="drawing-blue" type="radio" name="drawing-color" value="#03a9f4" style={{"display" : "none"}} />
                            <label htmlFor="drawing-blue">
                                <div className="set__drawing-color-box" id="set__drawing-blue"></div>
                            </label>
                            <input id="drawing-cyan" type="radio" name="drawing-color" value="#00bcd4" style={{"display" : "none"}} />
                            <label htmlFor="drawing-cyan">
                                <div className="set__drawing-color-box" id="set__drawing-cyan"></div>
                            </label>
                            <input id="drawing-teal" type="radio" name="drawing-color" value="#009688" style={{"display" : "none"}} />
                            <label htmlFor="drawing-teal">
                                <div className="set__drawing-color-box" id="set__drawing-teal"></div>
                            </label>
                            <input id="drawing-green" type="radio" name="drawing-color" value="#4caf50" style={{"display" : "none"}} />
                            <label htmlFor="drawing-green">
                                <div className="set__drawing-color-box" id="set__drawing-green"></div>
                            </label>
                            <input id="drawing-yellow" type="radio" name="drawing-color" value="#ffeb3b" style={{"display" : "none"}} />
                            <label htmlFor="drawing-yellow">
                                <div className="set__drawing-color-box" id="set__drawing-yellow"></div>
                            </label>
                            <input id="drawing-orange" type="radio" name="drawing-color" value="#ff9800" style={{"display" : "none"}} />
                            <label htmlFor="drawing-orange">
                                <div className="set__drawing-color-box" id="set__drawing-orange"></div>
                            </label>
                            <input id="drawing-grey" type="radio" name="drawing-color" value="#9e9e9e" style={{"display" : "none"}} />
                            <label htmlFor="drawing-grey">
                                <div className="set__drawing-color-box" id="set__drawing-grey"></div>
                            </label>
                            <input id="drawing-white" type="radio" name="drawing-color" value="#ffffff" style={{"display" : "none"}} />
                            <label htmlFor="drawing-white">
                                <div className="set__drawing-color-box" id="set__drawing-white"></div>
                            </label>
                        </div>
                        <div className="set__isDrawing">
                            <input id="isDrawing" type="checkbox" name="isDrawingCheck" style={{"display" : "none"}} />
                            <label htmlFor="isDrawing">
                                <div className="isDrawingBtn" id="isDrawingBtn">
                                    <div className="isDrawingToggle"></div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Drawing;