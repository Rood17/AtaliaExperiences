/* Ser inner height max **/
function setAutoHeight(element){
    console.log("estamos ajustando height : " + windowsHeight)
    element.style.height = windowsHeight + px;
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
    center = (windowWidth / 2) - $(element).width() /2;
    element.style.marginLeft = center + px;
    console.log(center)
}

function centerVerticalElem(element){
    center = (windowsHeight / 2) - $(element).height();
    element.style.marginTop = center + px;
    console.log(center)
}