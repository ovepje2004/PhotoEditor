import React, {useEffect, useState} from "react";
import SquareSVG from "../image/square-soild.svg";

import TriangelSVG from "../image/triangle.svg";
import RectangelSVG from "../image/rectangle.svg";
import CircleSVG from "../image/circle.svg";

const AddFigure = () => {
    return(
        <>
        <div className="edit-option" id="addFigure__btn">
            <img src={SquareSVG} />
            <div id="addFigure__config" className="config__window">
                <div className="config__inner">
                    <div className="config__window-title">
                        <p>도형 추가</p>
                    </div>
                    <div className="config__window-content">
                        <div className="set__shape">
                            <input id="triangle" type="radio" name="shape" value="triangle" style={{"display" : "none"}} defaultChecked />
                            <label htmlFor="triangle">
                                <div className="set__shape-box" id="set__triangle">
                                    <img src={TriangelSVG} />
                                </div>
                            </label>
                            <input id="rect" type="radio" name="shape" value="rect" style={{"display" : "none"}} />
                            <label htmlFor="rect">
                                <div className="set__shape-box" id="set__rect">
                                    <img src={RectangelSVG} />
                                </div>
                            </label>
                            <input id="circle" type="radio" name="shape" value="circle" style={{"display" : "none"}} />
                            <label htmlFor="circle">
                                <div className="set__shape-box" id="set__circle">
                                    <img src={CircleSVG} />
                                </div>
                            </label>
                        </div>
                        <div className="set__color">
                            <input id="black" type="radio" name="color" value="#000000" style={{"display" : "none"}} defaultChecked />
                            <label htmlFor="black">
                                <div className="set__color-box" id="set__black"></div>
                            </label>
                            <input id="red" type="radio" name="color" value="#f44336" style={{"display" : "none"}} />
                            <label htmlFor="red">
                                <div className="set__color-box" id="set__red"></div>
                            </label>
                            <input id="pink" type="radio" name="color" value="#e91e63" style={{"display" : "none"}} />
                            <label htmlFor="pink">
                                <div className="set__color-box" id="set__pink"></div>
                            </label>
                            <input id="purple" type="radio" name="color" value="#9c27b0" style={{"display" : "none"}} />
                            <label htmlFor="purple">
                                <div className="set__color-box" id="set__purple"></div>
                            </label>
                            <input id="blue" type="radio" name="color" value="#03a9f4" style={{"display" : "none"}} />
                            <label htmlFor="blue">
                                <div className="set__color-box" id="set__blue"></div>
                            </label>
                            <input id="cyan" type="radio" name="color" value="#00bcd4" style={{"display" : "none"}} />
                            <label htmlFor="cyan">
                                <div className="set__color-box" id="set__cyan"></div>
                            </label>
                            <input id="teal" type="radio" name="color" value="#009688" style={{"display" : "none"}} />
                            <label htmlFor="teal">
                                <div className="set__color-box" id="set__teal"></div>
                            </label>
                            <input id="green" type="radio" name="color" value="#4caf50" style={{"display" : "none"}} />
                            <label htmlFor="green">
                                <div className="set__color-box" id="set__green"></div>
                            </label>
                            <input id="yellow" type="radio" name="color" value="#ffeb3b" style={{"display" : "none"}} />
                            <label htmlFor="yellow">
                                <div className="set__color-box" id="set__yellow"></div>
                            </label>
                            <input id="orange" type="radio" name="color" value="#ff9800" style={{"display" : "none"}} />
                            <label htmlFor="orange">
                                <div className="set__color-box" id="set__orange"></div>
                            </label>
                            <input id="grey" type="radio" name="color" value="#9e9e9e" style={{"display" : "none"}} />
                            <label htmlFor="grey">
                                <div className="set__color-box" id="set__grey"></div>
                            </label>
                            <input id="white" type="radio" name="color" value="#ffffff" style={{"display" : "none"}} />
                            <label htmlFor="white">
                                <div className="set__color-box" id="set__white"></div>
                            </label>
                        </div>
                    </div>
                    <div className="config__window-submit">
                        <div className="config__window-submitBtn" id="addFigure__confirm"><p>OK</p></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AddFigure;