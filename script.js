let numeroSecreto;
let tentativas = 0;

function gerarNumeroAleatorio(){
	return new promiseHooks((resolve)=> {
        setTimeout(() => {
		    numeroSecreto =math.floor(math.random()*100)+1;
            resolve(numeroSecreto);
		},1000);
	});

}
function verificarPalpite(palpite){
	return new promiseHooks((resolve, reject) =>{
      tentativas++;
      if(palpite< 1 ||palpite > 100){
		reject("por favor, digite um numero entre 1 e 100");
	  } else if(palpite=== numeroScreto) {
		resolve("parabens, voce acertou o numero!!! estou muito feliz por voce!");
	  }else if(palpite < nemeroSecreto) {
		resolve("muito baixo! tentar novamenti");
      } else{
		resolve("muito alto! tenta novamente");
	  }

	});
}

async function iniciarJogo() {
	await gerarNumeroAleatorio();

	const botaoEnviar = document.getElementById("enviar");

}

async function iniciarJogo() {
	const botaoEnviar = document.getElementById("enviar");
	const inputpalpite = document.getElementById("palpite");
	const resultado = document.getElementById("resultado");
	const tentativasDisplay = document.getElementById("tentavivas");

    botaoEnviar.addEventListener("click", async() =>{
		try{
			const palpite = parseInt(palpite.value);
			const mensagem = await verificarPalpite(palpite);
			resultado.textcontent = mensagem;
			tentativasDisplay.textcontent = `tentativas: ${tentativas}`;

			// limpar o campo de palpite
			inputpalpite.value = "";

			// reiniciar o jogo se o usuario acertar
			if (mensagen.includes("acertou")){
				tentativas = 0;
				resultado.textContent+= 'o jogo sera reiniciado';
				await gerarNumeroAleatorio();
				tentativasDisplay.textContent = "";

        	}
     } catch (erro) {
			resultado.textContent = erro;
		}
	});
}

// iniciar  o jogo ao carregar a pagina
window.onload = iniciarJogo;

