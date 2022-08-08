/* Ser inner height max **/
async function setAutoHeight(element){
    
    element.style.height = windowsHeight + px;
    var isREADY = await setIntroFooter().then((response) => {
        
        if (response) $(".preloader").addClass('loaded');
    })
    
    console.log("estamos ajustando height : " + windowsHeight)
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

async function  setIntroFooter (){
    var ih = introFooter.style.height = introFooterHeight + px;
    infHeight = windowsHeight - introFooterHeight;
    introFooter.style.top = infHeight + px;
    introFooter.style.display = 'none';
    
    return  true;
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