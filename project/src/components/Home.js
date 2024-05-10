import React, {useEffect, useState} from "react";
import HomeSvg from "../image/home-solid.svg";
import ImageSvg from "../image/image-solid.svg";

import InputImgBtn from "./InputImgBtn";
import Intro from "./Intro";

const Home = () => {
    const rmbg = () => {
        console.log('run');
    }

    return(
        <div className="home">
            {/* <img src={imgBase64} />
            <div>
                <input type="file" name="imgFile" id="imgFile" onChange={handleChangeFile}/>
            </div> */}
            <div className="navbar">
                <p>Photo Editor</p>
            </div>
            <div className="main-content">
                <div className="sidebar">
                    <div className="menuBtn">
                        <img src={HomeSvg} />
                        <p>Home</p>
                    </div>
                    <div className="menuBtn">
                        <img src={ImageSvg} />
                        <p>Rm BG</p>
                    </div>
                </div>
                <div className="content">
                    <div className="inputImg">
                        <div className="title">
                            <p>Online Photo Editor</p>
                        </div>
                        <div className="subtitle">
                            <p>
                                간단하게 사용가능한 온라인 사진 편집기 입니다.<br />
                                사진에 다양한 효과를 줄 수 있으며 OpenCV를 이용한 사진배경 제거 또한 가능합니다.
                            </p>
                        </div>
                        <InputImgBtn name="imgFile" id="imgFile" />
                    </div>
                    <Intro />
                </div>
            </div>
        </div>
    )
}

export default Home;