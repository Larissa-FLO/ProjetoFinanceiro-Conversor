var moeda = "12";

async function buscarDados(){
    moeda = document.querySelector(".selecaoMoedas").value
    let dados = await fetch(`https://economia.awesomeapi.com.br/last/${moeda}`).then(Response => Response.json());
    conversao(dados)
    dadosGrafico()
}

function conversao(dados) {
    const valor = document.querySelector('.valorEntrada').value;
    if (isNaN(valor)) {
        alert("Digite um número válido.");
    }else if(moeda == 0){  
            alert("Selecione uma moeda para conversão.") 
            document.getElementById('saida').innerText = ""
            console.log(moeda);
    } else {
    const a = Object.keys(dados)[0]
    const valorConversao = dados[a].ask;

    document.querySelector('.valorSaida').value = valor/valorConversao;

    console.log(dados);
    }
     
} 




