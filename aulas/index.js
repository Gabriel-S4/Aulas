//Projeto
//irei utilizar: 
//criar uma variável pra armazenar o nome e quantidade de experiência (XP) de um herói
let nome
nome = "Gabriel"

let nivel

let xp = 0

if (xp < 1000){
nivel = "Ferro"
}
else if (xp < 2000){
  nivel = "Bronze"
}
else if (xp < 5000){
  nivel = "prata"
}
else if (xp < 7000){
  nivel = "Ouro"
}
else if (xp < 8000){
  nivel = "Platina"
}
else if (xp < 9000){
  nivel = "Ascendente"
}
else if (xp < 10000){
  nivel = "Imortal"
}
else {(xp > 10001)
nivel = "Radiante"}


console.log("O Herói de nome " + nome + " está no nível de " + nivel)