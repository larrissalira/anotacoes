class AnotacoesView {
   constructor(){
   }
   renderizaAnotacao (model){
       const titulo = document.getElementById("titulo").value;
       $('#teste').html(`<div><h6>${titulo}</h6></div>`)
   }  
}