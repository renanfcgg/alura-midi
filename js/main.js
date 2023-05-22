const listaDeTeclas = document.querySelectorAll(".tecla");

function tocaSom (seletorAudio) {
   const elemento = document.querySelector(seletorAudio);
   if (elemento && elemento.localName === 'audio' ) {
    elemento.play();
    } else {
    console.log("Elemento não encontrado ou seletor inválido")
   }
}

let contador = 0; 

for (let i = 0; i < listaDeTeclas.length; i++) {
    
    const tecla = listaDeTeclas[i];
    const classList = tecla.classList[1];
    const IdAudio = `#som_${classList}`;

    tecla.onclick = function () {   
        tocaSom(IdAudio);
    };

    tecla.onkeydown = function (evento) {

        if (evento.code === "Enter" || evento.code === "space") {
            tecla.classList.add("ativa");
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove("ativa");
    }
    
}
