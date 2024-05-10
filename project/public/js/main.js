var canvas;
var useWorkspace = false;
var configWindowHide = true;
var colorList = [], weightList = [];
var imageSize = {
    width : undefined,
    height : undefined
}

window.onload = () => {
    resizeEle();

    document.getElementById('inputImg-Btn').addEventListener('click', () => {
        document.getElementById('imgFile').click();
    })

    document.getElementById('imgFile').addEventListener('change', showWorkspace);

    function showWorkspace(input){
        var ImgBase64;

        $('.home').css({"display": "none"});
        $('.workspace').css({"display": "block"});

        let reader = new FileReader();
        
        reader.onloadend = () => {
            const base64 = reader.result;
            ImgBase64 = base64.toString();
            renderCanvas(ImgBase64);
        }
        reader.readAsDataURL(input.target.files[0]);
    }

    function resizeEle(){
        if(useWorkspace){
            var sidebarWidth = $('#workspace__sidebar').width();
            var zoom = (sidebarWidth+canvas.width)/window.innerWidth + 0.1;
            if(sidebarWidth+canvas.width > window.innerWidth){
                canvas.setDimensions({width:canvas.width/zoom, height:canvas.height/zoom});
                canvas.backgroundImage.scaleToWidth(canvas.width);
                canvas.backgroundImage.scaleToHeight(canvas.height);
                canvas.renderAll();
            }
            else if((sidebarWidth+canvas.width)*1.1 < window.innerWidth){
                canvas.setDimensions({width:canvas.width*(1/zoom), height:canvas.height*(1/zoom)});
                canvas.backgroundImage.scaleToWidth(canvas.width);
                canvas.backgroundImage.scaleToHeight(canvas.height);
                canvas.renderAll();
            }
        }
        $('.isDrawingBtn').css({'background-color' : '#8f8f8f'});
        $('.isDrawingToggle').css({'transform' : 'translateX(4px)'});
    }

    function renderCanvas(ImgBase64){
        var img = new Image();
        img.src = ImgBase64;
        useWorkspace = true;

        img.onload = () => {
            imageSize.width = img.width;
            imageSize.height = img.height;

            canvas = new fabric.Canvas('canvas');

            var f_img = new fabric.Image(img);
            canvas.setBackgroundImage(f_img);

            fabric.Object.prototype.transparentCorners = false;
            fabric.Object.prototype.cornerColor = '#487CA8';
            fabric.Object.prototype.cornerStyle = 'circle';
            
            var sidebarWidth = $('#workspace__sidebar').width();
            if(sidebarWidth+img.width > window.innerWidth){
                var zoom = (sidebarWidth+img.width)/window.innerWidth + 0.1;
                canvas.setDimensions({width:img.width/zoom, height:img.height/zoom});
                canvas.backgroundImage.scaleToWidth(img.width/zoom);
                canvas.backgroundImage.scaleToHeight(img.height/zoom);
                canvas.renderAll();
            }
            else{
                canvas.setDimensions({width:img.width, height:img.height});
            }

            //canvas
            canvas.on('mouse:wheel', function(opt) {
                opt.e.preventDefault();
                opt.e.stopPropagation();
            });
            document.onkeydown = function(e){
                if(e.keyCode == 46 || e.keyCode == 27){
                    deleteObj();
                }
            }

            //home Button
            document.getElementById('goHome').addEventListener('click', () => {
                location.reload();
            })

            //download Button
            document.getElementById('lnkDownload').addEventListener('click', saveImage, false);

            //addFigure
            document.getElementById('addFigure__btn').addEventListener('click', () => {
                if(configWindowHide){
                    hideConfigWindow();
                    $('#addFigure__config').css({'display' : 'block'});
                    configWindowHide = false;
                } else{
                    hideConfigWindow();
                    configWindowHide = true;
                }
            });
            document.getElementById('addFigure__confirm').addEventListener('click', () => {
                var shape, color;
                for(let i=0; i<document.getElementsByName("shape").length; i++){
                    if(document.getElementsByName("shape")[i].checked == true){
                        shape = document.getElementsByName("shape")[i].value;
                    }
                }
                for(let i=0; i<document.getElementsByName("color").length; i++){
                    if(document.getElementsByName("color")[i].checked == true){
                        color = document.getElementsByName("color")[i].value;
                    }
                }
                addFigure(shape, color);
            })

            //addSticker
            document.getElementById('addSticker__btn').addEventListener('click', () => {
                if(configWindowHide){
                    hideConfigWindow();
                    $('#addSticker__config').css({'display' : 'block'});
                    configWindowHide = false;
                } else{
                    hideConfigWindow();
                    configWindowHide = true;
                }
            });
            document.getElementById('addSticker__confirm').addEventListener('click', () => {
                var imageURL;
                for(let i=0; i<document.getElementsByName("sticker").length; i++){
                    if(document.getElementsByName("sticker")[i].checked == true){
                        imageURL = document.getElementsByName("sticker")[i].value;
                    }
                }
                addSticker(imageURL);
            })

            //addText
            document.getElementById('addText__btn').addEventListener('click', () => {
                if(configWindowHide){
                    hideConfigWindow();
                    $('#addText__config').css({'display' : 'block'});
                    configWindowHide = false;
                } else{
                    hideConfigWindow();
                    configWindowHide = true;
                }
            });
            document.getElementById('addTextbox__confirm').addEventListener('click', () => {
                var fontColor;
                for(let i=0; i<document.getElementsByName("font-color").length; i++){
                    if(document.getElementsByName("font-color")[i].checked == true){
                        fontColor = document.getElementsByName("font-color")[i].value
                    }
                }
                addTextbox(fontColor);
            })

            //draw
            document.getElementById('draw__btn').addEventListener('click', () => {
                if(configWindowHide){
                    hideConfigWindow();
                    $('#draw__config').css({'display' : 'block'});
                    configWindowHide = false;
                } else{
                    hideConfigWindow();
                    configWindowHide = true;
                }
            });
            document.getElementById('isDrawingBtn').addEventListener('click', () => {
                if(document.getElementById('isDrawing').checked == false){
                    var weight, color;
                    $('.isDrawingBtn').css({'background-color' : '#0D66D0'});
                    $('.isDrawingToggle').css({'transform' : 'translateX(36px)'});
                    for(let i=0; i<document.getElementsByName("weight").length; i++){
                        if(document.getElementsByName("weight")[i].checked == true){
                            weight = document.getElementsByName("weight")[i].value;
                        }
                    }
                    for(let i=0; i<document.getElementsByName("drawing-color").length; i++){
                        if(document.getElementsByName("drawing-color")[i].checked == true){
                            color = document.getElementsByName("drawing-color")[i].value;
                        }
                    }
                    drawing(true, weight, color);
                }
                else{
                    $('.isDrawingBtn').css({'background-color' : '#8f8f8f'});
                    $('.isDrawingToggle').css({'transform' : 'translateX(4px)'});
                    drawing(false);
                }
            })
            for(let i=0; i<document.getElementsByName("weight").length; i++){
                weightList[i] = document.getElementsByName("weight")[i].value;
            }
            for(let i=0; i<document.getElementsByName("drawing-color").length; i++){
                colorList[i] = document.getElementsByName("drawing-color")[i].value;
            }
            for(let i=0; i<document.getElementsByClassName('set__drawing-weight-box').length; i++){
                document.getElementsByClassName('set__drawing-weight-box')[i].addEventListener('click', () => {
                    var weight = weightList[i];
                    canvas.freeDrawingBrush.width = weight;
                })
            }
            for(let i=0; i<document.getElementsByClassName('set__drawing-color-box').length; i++){
                document.getElementsByClassName('set__drawing-color-box')[i].addEventListener('click', () => {
                    var color = colorList[i];
                    canvas.freeDrawingBrush.color = color;
                })
            }
        }
    }

    window.addEventListener('resize', resizeEle);
}

function hideConfigWindow(){
    $('.config__window').css({'display': 'none'});
}

function deleteObj(){
    var activeObject = canvas.getActiveObject()
    if(activeObject){
        canvas.remove(activeObject);
    }
}

function saveImage(){
    // canvas.setDimensions({width:imageSize.width, height:imageSize.height});
    // canvas.backgroundImage.scaleToWidth(canvas.width);
    // canvas.backgroundImage.scaleToHeight(canvas.height);
    canvas.renderAll();
    this.href = canvas.toDataURL({
        format: 'png',
        // width: imageSize.width,
        // height: imageSize.height
    })
    this.download = 'canvas.png';
    resizeEle();
}

function addFigure(shape, color){
    if(shape == "triangle"){
        var triangle = new fabric.Triangle({
            width: 150, height: 75*Math.sqrt(3), fill: color
        })
        canvas.centerObject(triangle);
        canvas.add(triangle);
    }
    else if(shape == "rect"){
        var rect = new fabric.Rect({
            width: 150, height: 150, fill: color
        })
        canvas.centerObject(rect);
        canvas.add(rect);
    }
    else if(shape == "circle"){
        var circle = new fabric.Circle({
            radius: 70, fill: color
        })
        canvas.centerObject(circle);
        canvas.add(circle);
    }
    else{
        console.log('error');
    }
}

function addSticker(imageURL){
    var imageFile = new Image();
    imageFile.src = `../image/${imageURL}`;
    imageFile.onload = function(){
        var image = new fabric.Image(imageFile);
        image.set({
            angle: 0,
        })
        canvas.centerObject(image);
        canvas.add(image);
        canvas.renderAll();
    }
}

function addTextbox(fontColor){
    var textbox = new fabric.Textbox('Text', {
        width: 200,
        fontSize: 50,
        textAlign: 'center',
        fixedWidth: 200,
        fill: fontColor,
        fontFamily: 'Quicksand'
    })
    canvas.centerObject(textbox);
    canvas.add(textbox);
}

function drawing(isDrawing, weight=10, color="#000000"){
    if(isDrawing){
        canvas.isDrawingMode= 1;
        canvas.freeDrawingBrush.color = color;
        canvas.freeDrawingBrush.width = weight;
        canvas.renderAll();
    }
    else{
        canvas.isDrawingMode= 0;
    }
}