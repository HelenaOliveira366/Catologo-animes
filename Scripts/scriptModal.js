//Objeto que contém duas classes, a primeira é para exibir o modal na tela, e a segunda, para removê-lo
//"modal-container"(transparência) é a caixa que contém o "modal"(descrição do anime)
const Modal = {
    open(){
        //A classe "active" será adicionada à lista de classes do elemento que chamar a função "open" no HTML, atráves do DOM - Botão de saiba mais
        document.querySelector(".modal-container").classList.add("active");
    },
    close(){
        //A classe "active" será removida da lista de classes do elemento que chamar a função "open" no HTML, atráves do DOM - Botão fechar
        document.querySelector(".modal-container").classList.remove("active")
    }
}

//Acho que pra trabalhar com a sinopse dos outros animes, precisarei de um array