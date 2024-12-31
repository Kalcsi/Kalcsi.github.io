//MENÜ
const hamburger=document.getElementById("hamburger")
const menü=document.getElementById("menü")

hamburger.onclick=function(){
    if(menü.classList.contains("show")){
        menü.classList.remove("show");
        menü.classList.add("hide");
        setTimeout(()=> {
            menü.style.display="none";
            menü.classList.remove("hide")
        }, 500);
    }else{
        menü.style.display="block"
        setTimeout(()=>{menü.classList.add("show");},10);
    }
};






//NAGYON
const nagyon=document.getElementById("nagyon")
const nagyongomb=document.getElementById("nagyongomb")
const nagyonbron=document.getElementById("nagyonbron")
const nagyonmordo=document.getElementById("nagyonmordo")
const nagyonmi=document.getElementById("nagyonmi")
const válasz=document.getElementById("válasz")

function resetAnimation(){
    válasz.style.animation="none";
    void válasz.offsetWidth;
    válasz.style.animation=""
}
nagyongomb.onclick=function(){
    nagyon.style.display="block"
    if(menü.style.display="block"){
        setTimeout(()=>{menü.classList.add("hide");},10);
    }
}

nagyonbron.onclick=function(){
    válasz.style.display="block";
    válasz.classList.remove("rossz","jo","hidden");
    válasz.textContent="Rossz válasz";   
    válasz.classList.add("rossz");
    void válasz.offsetWidth;
    válasz.style.animation="shake 1s moveDown 1s";
    válasz.scrollIntoView({behavior:"smooth"});
    resetAnimation(válasz);
}
nagyonmordo.onclick=function(){
    válasz.style.display="block";
    válasz.textContent="Rossz válasz";
    válasz.classList.remove("rossz","jo","hidden");
    válasz.classList.add("rossz");
    void válasz.offsetWidth;
    válasz.style.animation="shake 1s moveDown 1s";
    válasz.scrollIntoView({behavior:"smooth"});
    resetAnimation(válasz);

}
nagyonmi.onclick=function(){
    válasz.style.display="block";
    válasz.textContent="Helyes válasz";
    válasz.classList.remove("rossz","jo","hidden");
    válasz.classList.add("jo");
    void válasz.offsetWidth;
    válasz.style.animation="fadeIn 2s moveDown 1s";
    válasz.scrollIntoView({behavior:"smooth"});
    resetAnimation(válasz);
}







//SZERETLEK
const szeretlek=document.getElementById("szeretlek")
const szeretlekgomb=document.getElementById("szeretlekgomb")

szeretlekgomb.onclick=function(){
    nagyon.style.display="none"
    if(menü.style.display="block"){
        setTimeout(()=>{menü.classList.add("hide");},10);
    }
}



 

//TÉGED
const téged=document.getElementById("téged")
const tégedgomb=document.getElementById("tégedgomb")

tégedgomb.onclick=function(){
    nagyon.style.display="none"
    if(menü.style.display="block"){
        setTimeout(()=>{menü.classList.add("hide");},10);
    }
}





//SZIVECSKE
const szivecske=document.getElementById("szivecske")
const szivecskegomb=document.getElementById("szivecskegomb")


szivecskegomb.onclick=function(){
    nagyon.style.display="none"
    if(menü.style.display="block"){
        setTimeout(()=>{menü.classList.add("hide");},10);
    }
}
