//

const intro = document.getElementById("intro");
const IndexSlider = document.getElementById("IndexSlider");
const AllSections = document.getElementById("AllSections");
const body = document.getElementById('Body');
const windowsHeight = window.innerHeight;
const windowWidth = window.innerWidth;
const introFooter = document.getElementById('introFooter');
const HeaderVideo = document.getElementById("HeaderVideo");
const IntroVideo = document.getElementById("IntroVideo");
const introSubTxt = document.getElementById("introSubTxt");
const introContinueBtn = document.getElementById("introContinueBtn");
const introSkipBtn = document.getElementById("introSkipBtn");
const introLogo = document.getElementById("introLogo");
const sectionChange = document.getElementById("sectionChange")
const introVideoSrc = document.getElementById("introVideoSrc")
const headerOceanVideo = document.getElementById("headerOceanVideo")

const introFooterHeight = 70;
const px = 'px';

let AutoHReady = false;

window.addEventListener('scroll',(event) => {
    console.log('Scrolling... : '+ window.window.scrollY);
    if (window.window.scrollY == 0){
        
        //activateSlider(true)
        //setOverflowHidden(true)
    } else {
        setOverflowHidden(false)
    }
});

// INIT
window.onload= function () {
    console.log("Init Atalia System")
    setOverflowHidden(true)
    setElementDisplay(AllSections, false)
    
    setAutoHeight(intro)
    
    
    // liberate pageXOffset
    pageMaster.style.display = 'block';
    
    // set elements
    centerElementByMargin(introLogo);
    centerVerticalElem(introLogo);
    
    // headerOceanVideo

}

function setOverflowHidden( flag ){
    console.log("set overflow : " + flag)
    flag 
    ? body.style.overflow = 'hidden' 
    : body.style.overflow = 'auto'
}
function activateIntro(flag) {
    if (flag) {
        intro.style.display = "block";
        intro.classList.remove( "m-fadeOut" )
        intro.classList.toggle("m-fadeIn");
    } else {
        intro.classList.remove("m-fadeIn");
        intro.classList.toggle("m-fadeOut");
        intro.style.display = "none";
    }
}
function activateSlider(flag) {
    if (flag) {
        IndexSlider.classList.toggle("m-fadeIn");
        activateAllSections(false)
    } else {
        IndexSlider.classList.remove( "m-fadeIn" )
    }
} 
function activateAllSections(flag){
    if (flag){
        AllSections.style.display = 'block';
        AllSections.classList.toggle("m-fadeIn");
        video_header()
    } else {
        AllSections.classList.remove("m-fadeIn");
        AllSections.style.display = 'none';
    }
}


function transformIntro() {
    
    //introContinueBtn.style.display = 'block';
    
    // video
    IntroVideo.style.display = 'none';
    //HeaderVideo.style.display = 'block';
    
    //introLogo.style.marginLeft = '15%';
    
    // elements
    //introSubTxt.style.display = 'block';
    
    introSkipBtn.style.display = 'none';
    //introSubTxt.style.opacity = 1;
    activateSlider(true)
}

window.onbeforeunload = function() {
        window.scrollTo(0, 0);
}

function onSectionHover(sectionName) {
  sectionChange.innerHTML  = sectionName
}




