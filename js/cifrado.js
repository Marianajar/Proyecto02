/*import cipher from './script.js';


//Selectors

const texto = document.getElementById('msg');
const count = document.getElementById('counter');
const clave = document.getElementById('clave');
const cifrar = document.getElementById('Cifrar');
const descifrar = document.getElementById('Descifrar');
const lblMsgResult = document.getElementById("lblMsgResult");
const txtMsgResult = document.getElementById("msgResult");
const btnCopy = document.getElementById("copy");
const modalC = document.getElementsByClassName("modalContainer")[0];
const modal = document.getElementsByClassName("modal")[0];
const close = document.getElementById("close");

*/

//EventListeners
/* Limit characters
texto.addEventListener("keyup", () =>{
    count.innerHTML = texto.value.length + "/280";
});*/

/* Function cipher*/
/*cifrar.addEventListener("click",()=>{
    if(texto.value == ""){
        alert("Ingresa tu mensaje secreto.");
    }else if(clave.value == ""){
        alert("No olvides ingresar tu clave secreta.");
    }else{
        lblMsgResult.innerHTML = "Su mensaje cifrado es ";
        let msgResult = Cifrar.encode(parseInt(clave.value),texto.value);
        txtMsgResult.innerHTML = msgResult;
        openModal();
    }
});*/

/*Function decipher*/

/*descifrar.addEventListener("click",()=>{
    if(texto.value == ""){
        alert("Ingresa tu mensaje secreto.");
    }else if(clave.value == ""){
        alert("No olvides ingresar tu clave secreta.");
    }else{
        lblMsgResult.innerHTML = "Su mensaje descifrado es ";
        let msgResult = Cifrar.decode(parseInt(clave.value),texto.value);
        txtMsgResult.innerHTML = msgResult;
        openModal();
    }
});*/

/* Copy cipher or decipher message */
/*btnCopy.addEventListener("click",()=>{
    txtMsgResult.select();
    document.execCommand("copy");
    setTimeout(()=>{
        btnCopy.textContent = "Copiado!";
    }, 100);
});
*/
/* Modal events*/
/*close.addEventListener("click",()=>{
    closeModal();
});

window.addEventListener("click",(e)=>{
    if(e.target == modalC){
        closeModal();
    }
});*/


/*Functions */
/*function openModal(){
    modalC.classList.remove("containerClose");
    modal.classList.remove("modalClose");
}

function closeModal(){
    modal.classList.add("modalClose");
    clearMsg();
    setTimeout(()=>{
        btnCopy.innerHTML = "<i class='fas fa-copy'></i> Copiar";
        modalC.classList.add("containerClose");
    }, 550);
}

function clearMsg(){
    texto.value = "";
    texto.innerHTML = "";
    count.innerHTML = "0/300";
}*/






/*prueba02

let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".Cifrar")[0];
let descifrar = document.querySelectorAll(".Descifrar")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click", function(e){
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close")
 
 });

 descifrar.addEventListener("click", function(e){
   e.preventDefault();
   modalC.style.opacity = "1";
   modalC.style.visibility = "visible";
   modal.classList.toggle("modal-close")

});

cerrar.addEventListener("click", function(){
    modalC.style.opacity = "0";
    modalC.style.visibility = "hidden";
    modal.classList.toggle("modal-close")
    setTimeout(function(){
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden"; 
    }, 900)
 });

 window.addEventListener("click", function (e){
    console.log(e.target)
    if(e.target == modalC){
        closeModal();
    }
    setTimeout(function(){
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden"; 
    }, 900)
});*/

/* prueba 01

const texto = document.getElementById('msg');
const count = document.getElementById('counter');
const clave = document.getElementById('clave');
const cifrar = document.getElementById('Cifrar');
const descifrar = document.getElementById('Descifrar');
const lblMsgResult = document.getElementById("lblMsgResult");
const txtMsgResult = document.getElementById("msgResult");
const btnCopy = document.getElementById("copy");
const modalC = document.getElementsByClassName("modalContainer")[0];
const modal = document.getElementsByClassName("modal")[0];
const close = document.getElementById("close");


texto.addEventListener("keyup", () => {
    countinnerHTML = texto.value.length + "/300";
})

//cifrar
cifrar.addEventListener("click",()=>{
    if(texto.value == ""){
        alert("Ingresa tu mensaje secreto.");
    }else if(clave.value == ""){
        alert("No olvides ingresar tu clave secreta.");
    }else{
        lblMsgResult.innerHTML = "Su mensaje cifrado es ";
        let msgResult = Cifrar.encode(parseInt(clave.value),texto.value);
        txtMsgResult.innerHTML = msgResult;
        openModal();
    }
});

//descifrqado

descifrar.addEventListener("click",()=>{
    if(texto.value == ""){
        alert("Ingresa tu mensaje secreto.");
    }else if(clave.value == ""){
        alert("No olvides ingresar tu clave secreta.");
    }else{
        lblMsgResult.innerHTML = "Su mensaje descifrado es ";
        let msgResult = Cifrar.decode(parseInt(clave.value),texto.value);
        txtMsgResult.innerHTML = msgResult;
        openModal();
    }
});

btnCopy.addEventListener("click",()=>{
    txtMsgResult.select();
    document.execCommand("copy");
    setTimeout(()=>{
        btnCopy.textContent = "Copiado!";
    }, 100);
});

close.addEventListener("click",()=>{
    closeModal();
});

window.addEventListener("click",(e)=>{
    if(e.target == modalC){
        closeModal();
    }
});

//Funciones

function openModal(){
    modalC.classList.remove("containerClose");
    modal.classList.remove("modalClose");
}

function closeModal(){
    modal.classList.add("modalClose");
    clearMsg();
    setTimeout(()=>{
        btnCopy.innerHTML = "<i class='fas fa-copy'></i> Copiar";
        modalC.classList.add("containerClose");
    }, 550);
}

function clearMsg(){
    texto.value = "";
    texto.innerHTML = "";
    count.innerHTML = "0/300";
}

*/