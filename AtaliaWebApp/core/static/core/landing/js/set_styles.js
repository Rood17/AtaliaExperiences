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

function centerInThird (element) {
    center = $(windowsHeight2 / 3) - $(element).height();
    center < 0 ? center *= -1 : null;
    console.log(" center : " + center)
    element.style.marginTop = center + px2;
    console.log(center)
}

function qrSettings () {
    const carousel = document.getElementById("carouselExampleCaptions")
    const collection = document.getElementsByClassName("kwadrat2");
    const collection2 = document.getElementsByClassName("trojkat2");
    const innerCarousel = document.getElementById("innerCarousel");
    
    var hAltitud = windowsHeight2 / 2.5;

    var resultHeight = hAltitud * 2.2;

    // tamaño
    for ( var i = 0; i < collection2.length; i++){
        
        collection2[i].style.height = hAltitud + px2;
        collection2[i].style.width = hAltitud + px2;
        
        var center = (windowWidth2 / 2) - $(collection2[i]).width() /2;
        collection2[i].style.marginLeft = center + px2;
    }

    innerCarousel.style.height = resultHeight + px2;
    carousel.style.height = resultHeight + px2;
    
    for ( var i = 0; i < collection.length; i++){
        collection[i].style.height = resultHeight + px2;
    }

}