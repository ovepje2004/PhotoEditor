import React, {useEffect, useState} from "react";
import TextSVG from "../image/font-solid.svg";

const AddTextbox = () => {
    return(
        <div className="edit-option" id="addText__btn">
            <img src={TextSVG} />
            <div id="addText__config" className="config__window">
                <div className="config__inner">
                    <div className="config__window-title">
                        <p>텍스트 추가</p>
                    </div>
                    <div className="config__window-content">
                        <div className="set__textbox">
                            <input id="font-black" type="radio" name="font-color" value="#000000" style={{"display" : "none"}} defaultChecked />
                            <label htmlFor="font-black">
                                <div className="set__textbox-box" id="set__font-black"></div>
                            </label>
                            <input id="font-red" type="radio" name="font-color" value="#f44336" style={{"display" : "none"}} />
                            <label htmlFor="font-red">
                                <div className="set__textbox-box" id="set__font-red"></div>
                            </label>
                            <input id="font-pink" type="radio" name="font-color" value="#e91e63" style={{"display" : "none"}} />
                            <label htmlFor="font-pink">
                                <div className="set__textbox-box" id="set__font-pink"></div>
                            </label>
                            <input id="font-purple" type="radio" name="font-color" value="#9c27b0" style={{"display" : "none"}} />
                            <label htmlFor="font-purple">
                                <div className="set__textbox-box" id="set__font-purple"></div>
                            </label>
                            <input id="font-blue" type="radio" name="font-color" value="#03a9f4" style={{"display" : "none"}} />
                            <label htmlFor="font-blue">
                                <div className="set__textbox-box" id="set__font-blue"></div>
                            </label>
                            <input id="font-cyan" type="radio" name="font-color" value="#00bcd4" style={{"display" : "none"}} />
                            <label htmlFor="font-cyan">
                                <div className="set__textbox-box" id="set__font-cyan"></div>
                            </label>
                            <input id="font-teal" type="radio" name="font-color" value="#009688" style={{"display" : "none"}} />
                            <label htmlFor="font-teal">
                                <div className="set__textbox-box" id="set__font-teal"></div>
                            </label>
                            <input id="font-green" type="radio" name="font-color" value="#4caf50" style={{"display" : "none"}} />
                            <label htmlFor="font-green">
                                <div className="set__textbox-box" id="set__font-green"></div>
                            </label>
                            <input id="font-yellow" type="radio" name="font-color" value="#ffeb3b" style={{"display" : "none"}} />
                            <label htmlFor="font-yellow">
                                <div className="set__textbox-box" id="set__font-yellow"></div>
                            </label>
                            <input id="font-orange" type="radio" name="font-color" value="#ff9800" style={{"display" : "none"}} />
                            <label htmlFor="font-orange">
                                <div className="set__textbox-box" id="set__font-orange"></div>
                            </label>
                            <input id="font-grey" type="radio" name="font-color" value="#9e9e9e" style={{"display" : "none"}} />
                            <label htmlFor="font-grey">
                                <div className="set__textbox-box" id="set__font-grey"></div>
                            </label>
                            <input id="font-white" type="radio" name="font-color" value="#ffffff" style={{"display" : "none"}} />
                            <label htmlFor="font-white">
                                <div className="set__textbox-box" id="set__font-white"></div>
                            </label>
                        </div>
                    </div>
                    <div className="config__window-submit">
                        <div className="config__window-submitBtn" id="addTextbox__confirm"><p>OK</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTextbox;