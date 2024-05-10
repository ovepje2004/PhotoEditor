import React, {useEffect, useState} from "react";
import SmileSVG from "../image/smile-soild.svg";

const AddSticker = () => {
    var stickers = [];
    for(let i=1; i<=10; i++){ stickers[i] = `sticker${i}` }

    const renderSticker = stickers.map(str => {
        const stickerURL = require(`../image/sticker/${str}.png`).default;
        if(str == "sticker1"){
            return(
                <div key={str}>
                    <input id={str} type="radio" name="sticker" value={str+".png"} style={{"display" : "none"}} defaultChecked />
                    <label htmlFor={str}>
                        <div className="set__sticker-box" id={`set__${str}`}>
                            <img src={stickerURL} />
                        </div>
                    </label>
                </div>
            )
        }
        else{
            return(
                <div key={str}>
                    <input id={str} type="radio" name="sticker" value={str+".png"} style={{"display" : "none"}} />
                    <label htmlFor={str}>
                        <div className="set__sticker-box" id={`set__${str}`}>
                            <img src={stickerURL} />
                        </div>
                    </label>
                </div>
            )
        }
    })

    return(
        <>
            <div className="edit-option" id="addSticker__btn">
                <img src={SmileSVG} />
                <div id="addSticker__config" className="config__window">
                    <div className="config__inner">
                        <div className="config__window-title">
                            <p>스티커 추가</p>
                        </div>
                        <div className="config__window-content">
                            <div className="set__sticker">
                                {renderSticker}
                            </div>
                        </div>
                        <div className="config__window-submit">
                            <div className="config__window-submitBtn" id="addSticker__confirm"><p>OK</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddSticker;