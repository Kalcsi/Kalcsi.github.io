const body= document.getElementById("parent")
const meglepi=document.getElementById("meglepi")
const kep=document.getElementById("kep")
var input= document.querySelector('input')
var p=document.getElementById('p')
const uads=document.getElementById("uads")
const shyt=document.getElementById("shyt")
const reszlet=document.querySelector("summary")
const akarmi=document.querySelector("details")
const milan=document.getElementById("milan")
const figcap=document.getElementById("figcap")
const naz=document.getElementById("naz")
const lebron=document.getElementById("lebron")
meglepi.addEventListener("click",function() {
    kep;
    meglepi;
    uads;

    input;
    p;
    if (kep.style.display === "none"){
        kep.style.display="block";
        input.style.display="inline";
        p.style.display="block"
        meglepi.textContent="Tul nonchalant ez nekem, tuntesd el!";
        uads.style.display="block";
        shyt.style.display="block";
        akarmi.style.display="inline";

    }
    else{
        kep.style.display="none";
        meglepi.textContent="Meglepetés";
        input.style.display="none";
        p.style.display="none"
        uads.style.display="none";
        shyt.style.display="none";
        akarmi.style.display="none";
    }
})
p.innerHTML=input.value
input.oninput=function(){
    akarmi.style.display="block"
    p.innerHTML=input.value;
    if (input.value >= 1 && input.value<=4){
        shyt.innerHTML='&#128557;Chopped shyt&#128557;';
        reszlet.innerHTML="Ismert &#128557;chopped&#128557; shytek"
        milan.style.display="inline"
        lebron.style.display="none"
        naz.style.display="none"
    } else if (input.value>=5 && input.value<=7){
        shyt.innerHTML="&#128539;Fine shyt&#128539;";
        reszlet.innerHTML="Ismert &#128539;fine&#128539; shytek";
        milan.style.display="none"
        lebron.style.display="none"
        naz.style.display="inline"
    } else if (input.value>=8 && input.value<=10){
        shyt.innerHTML="&#129321;Super shyt&#129321;";
        reszlet.innerHTML="Ismert &#129321;super&#129321; shytek";
        milan.style.display="none"
        lebron.style.display="inline"
        naz.style.display="none"
}}
