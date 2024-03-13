let tabuada = -10; 
let limite = -2;

if (tabuada <= 0) {
    console.log("Escolha uma tabuada com número positivo");
} else if (limite <= 0) {
    console.log("Por favor, escolha um limite com número positivo");
} else {
    for (let i = 1; i <= limite; i++) {
        let resultado = tabuada * i; 
        console.log(tabuada, "x", i, "=", resultado);
    }
}