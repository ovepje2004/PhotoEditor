import React, {useEffect, useState} from "react";

const InputImgBtn = (props) => {
    return(
        <div className="inputImg-section">
            <input type="file" name={props.name} id={props.id} accept=".jpg, .png, .jpeg" style={{display: "none"}}/>
            <div className="inputImg-Btn" id="inputImg-Btn">
                <p>Open Image</p>
            </div>
        </div>
    )
}

export default InputImgBtn;