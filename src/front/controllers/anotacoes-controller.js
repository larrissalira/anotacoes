class AnotacoesController {
    constructor (){
        this.anotacoesControl = [];
    }
    addAnotacao(){
        const titulo = document.getElementById("titulo").value;
        const descricaoTarefa = document.getElementById("descricaoTarefa").value;
        const anotacao = new Anotacoes(titulo,descricaoTarefa);
        console.log(anotacao);
        this.arrayAnotacoes.push(anotacao);
        console.log(this.anotacaoControl);
    }
}