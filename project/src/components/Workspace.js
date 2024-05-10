import React, {useEffect, useState} from "react";

import AddFigure from "./AddFigure";
import AddSticker from "./AddSticker";
import AddTextbox from "./AddTextbox";
import Drawing from "./Drawing";

import HomeSVG from "../image/home-solid.svg";
import DownloadSVG from "../image/download-solid.svg";

const Workspace = () => {
    return(
        <div className="workspace" style={{display : "none"}}>
            <div className="main-content">
                <div className="sidebar" id="workspace__sidebar">
                    <div className="home__section" id="goHome">
                        <img src={HomeSVG} />
                    </div>
                    <div className="edit__section">
                        <AddFigure />
                        <AddSticker />
                        <AddTextbox />
                        <Drawing />
                    </div>
                    <div className="download__section" id="download">
                        <a id="lnkDownload" href="#">
                            <img src={DownloadSVG} />
                        </a>
                    </div>
                </div>
                <div className="wallpaper" id="workspace__wallpaper">
                    <canvas id="canvas"></canvas>
                </div>
            </div>
        </div>
    )
}

export default Workspace;