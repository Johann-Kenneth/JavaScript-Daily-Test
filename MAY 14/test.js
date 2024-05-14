
// challenge 1

const numbers = [1, 1, 2, 3, 5];
const Add5=numbers.map(numbers=>numbers+5)
console.log(Add5)

//challenge 2

const words = ["planes", "trains", "automobiles"];
const notS=words.map(str=>str.slice(0,-1))
console.log(notS)

//challenge 3

const words1 = ["planes", "trains", "automobiles"];
const firstLetter=words1.map(str=>str.slice(0,1))
console.log(firstLetter)

//challenge 4

const words2 = ["planes", "trains", "automobiles"];
const caps= words2.map(str=>str.charAt(0).toUpperCase()+ str.slice(1))
console.log(caps)

//challenge 5

const pets = ["goldfish", "dog", "turtle", "tiger"]
const less=pets.filter(str=>str.length<=5)
console.log(less)

//challenge 6

const pets1 = ["goldfish", "dog", "turtle", "tiger"]
const t=pets.filter(str=>str.slice(0,1)==='t')
console.log(t)

//challenge 7

const numbers1 = [1, 1, 2, 3, 5];
const great4 = numbers1.filter(nums=>nums>4)
console.log(great4) 

//challenge 8

const even= numbers1.filter(nums=>nums%2===0)
console.log(even)
