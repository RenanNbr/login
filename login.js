let area = document.getElementById('area');

function entrar(){
    let nome = prompt("digite seu nome:");
    let sobrenome = prompt("digite seu sobrenome:");

    if(nome=== ''|| nome === null){
        alert('ops, algo de errado!!!')
        area.innerHTML = "click no botão para acessar"

    }else{
    area.innerHTML = ("bem vindo" + nome + " " + sobrenome);
    let botaoSair = document.createElement("button");
    botaoSair.innerHTML = "sair da conta" ;
    botaoSair.onclick = sair;
    area.appendChild(botaoSair);
    }


}

function sair(){
    alert('Até mais!!');
    area.innerHTML = "vocẽ saiu!"
}