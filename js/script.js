const botao = document.querySelector(".botao");

botao.addEventListener("click", () => {
    const nome = document.querySelector('#campo1').value;
    const altura = document.querySelector('#campo2').value;
    const peso = document.querySelector('#campo3').value;

    console.log(nome, altura, peso);
    if (altura <= 0 || peso <= 0) {
        document.getElementById('resultado').innerHTML = 'Verifique se todos os valores estão corretos';
    }
    else {
        let cal = ((peso) / (altura * altura));
        document.getElementById('resultado').innerHTML = (`${nome}.Seu IMC é ${cal.toFixed(2)}.`);
    }
}
);