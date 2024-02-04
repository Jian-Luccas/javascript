function soma(n1=0, n2=0) { // colocando o valor antecipadamente no parâmetro será considerado o mesmo caso não seja passado
    return n1 + n2
}

console.log(soma(2, 5))
console.log(soma(2)) // caso informe só um valor, por exemplo somente o n1 o n2 não tiver um valor atribuído na função, ficará como undefined e o resultado sera NaN (Not-A-Number)
