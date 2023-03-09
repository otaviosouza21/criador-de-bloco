const formBloco = document.forms[0];
const bloco = document.querySelector(".bloco");
const enviar = document.querySelector('button')

const propriedades = {}

function mudaBloco(e){
   propriedades[e.target.name] = e.target.value;

    
 let nomeProp = e.target.name;
 
    
 bloco.style.background = propriedades.nomeProp;
 console.log(nomeProp)


}


formBloco.addEventListener("change", mudaBloco)

