// let amigo = {nome: 'José', sexo: 'M', 85.4, engordar(p){}} - pode ser escrito desta forma ou:
let amigo = {nome: 'José',
sexo: 'M',
peso: 85.4,
engordar(p){
  console.log('Engordou')  
  this.peso += p
}}
let friend = []

console.log(typeof amigo)
console.log(typeof friend)
console.log(amigo)
console.log(amigo.nome)
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)