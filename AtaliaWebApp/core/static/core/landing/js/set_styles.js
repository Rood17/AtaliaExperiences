/* Ser inner height max **/
const windowsHeight2 = window.innerHeight;
const windowWidth2 = window.innerWidth;
const px2 = "px"

function setAutoHeight(element){
    
    element.style.height = windowsHeight2 + px2;
    AutoHReady = true;
    console.log("estamos ajustando height : " + windowsHeight2)
}

function setElementDisplay (element, flag){
    console.log("hola : " + flag)
    if ( flag ){
        element.style.display = 'block'
    } else {
        console.log("macahachahahaha : " + flag)
        element.style.dispay = 'none'
    }
}

function setIntroFooter(){
    var ih = introFooter.style.height = introFooterHeight + px;
    infHeight = windowsHeight - introFooterHeight;
    console.log("infHeight : " + infHeight)
    console.log("introFooter : " + introFooter)
    introFooter.style.top = infHeight + px;
}

function centerElementByMargin(element){
    center = (windowWidth2 / 2) - $(element).width() /2;
    element.style.marginLeft = center + px2;
    console.log(center)
}

function centerVerticalElem(element){
    center = (windowsHeight / 2) - $(element).height();
    element.style.marginTop = center + px;
    console.log(center)
}
