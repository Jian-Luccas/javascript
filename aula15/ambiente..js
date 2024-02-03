let num = [5, 8, 2, 9, 3]
/* 
    let = var
    num = nome da variável
    [] = delimitara o elemento e conterá os valores
    5, 8, 2... = são os valores informados, 
        - o local que irão ocupar, serão chamados de key/chave/índice
        - o índice sempre começará pelo 0
*/
num.sort() // comando que irá ordenar os valores da variável de forma crescente
num.push(1) // acrescenta um valor e cria uma key sem especificar manualmente a key que irá ocupar
console.log(`Nosso vetor é o ${num}`)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(num[0])
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`) // caso não tenha o valor procurado na variável será retornado o valor -1
} // trocará o valor -1 pela mensagem
