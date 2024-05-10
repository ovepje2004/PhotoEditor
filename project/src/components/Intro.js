import React, {useEffect, useState} from "react";
import axios from 'axios';
import DownloadSVG from "../image/download-solid.svg";

const Intro = () => {
    const [fileImage, setFileImage] = useState(undefined);
    const [imgSrc, setImgSrc] = useState(undefined);
    const [imgStyle, setImgStyle] = useState({alignItems : "flex-start"});

    const rmbgChange = (e) => {
        let reader = new FileReader();
        let img = new Image();
        let ImgBase64;
        
        reader.onloadend = () => {
            const base64 = reader.result;
            ImgBase64 = base64.toString();
            setImgSrc(base64.toString());
            img.src = ImgBase64;
            img.onload = () => {
                if(document.getElementById("img__view").offsetHeight < document.getElementById("img__view__inner").scrollHeight){
                    setImgStyle({alignItems : "flex-start"});
                } else{
                    setImgStyle({alignItems : "center"});
                }
            }
        }
        reader.readAsDataURL(e.target.files[0]);
        URL.revokeObjectURL(fileImage);
        setFileImage("");
        setFileImage(URL.createObjectURL(e.target.files[0]));
    }

    const rmbgDownload = () => {
        if(fileImage != undefined){
            axios.post('http://220.86.42.120/api/rmbg', { src: imgSrc }).then(response => {
                const imgLink = `http://220.86.42.120/image/rmbg/${response.data.fileName}.png`;
                document.getElementById('img__view__inner').src = imgLink;
                document.getElementById('rmgb_downloadLink').href = imgLink;
                document.getElementById('rmgb_downloadLink').click();
            });
        }
    }

    return(
        <div className="intro">
            <div className="title">
                <p>Remove Background</p>
            </div>
            <div className="img__view" id="img__view" style={imgStyle}>
                <img id="img__view__inner" src={fileImage} style={{width: "100%"}} />
            </div>
            <div className="inputImg-section">
                <input type="file" name="rmbg" id="rmbg" accept=".jpg, .png, .jpeg" onChange={rmbgChange} style={{display: "none"}}/>
                <label htmlFor="rmbg">
                    <div className="inputImg-Btn" id="inputImg-Btn">
                        <p>Open Image</p>
                    </div>
                </label>
            </div>
            <div className="rmbg_downloadBtn" onClick={rmbgDownload}>
                <img src={DownloadSVG} />
            </div>
            <a id="rmgb_downloadLink" href="#" download></a>
        </div>
    )
}

export default Intro;