

function palindro(texto) {
    return texto.split('').reverse().join('') == texto
}

console.log(palindro('o t t o'));
console.log(palindro('revolver'));
console.log(palindro('amadaladama'));
