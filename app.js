const prompt = require('prompt-sync')();

const isAlphabet =  /^[a-zA-Z]+$/;

let letter = []
let letterCount = []
 
let name1 = prompt('What is your name1?');

console.log(isAlphabet.test(name1))
while(!isAlphabet.test(name1)){
    console.log("Please enter alphabets only")
    name1 = prompt('What is your name1?');
}
let name2 = prompt('What is your name2?');
while(!isAlphabet.test(name2)){
    console.log("Please enter alphabets only")
    name2 = prompt('What is your name2?');
}
const sentence = `${name1}matches${name2}`
countLetter()
function countLetter() {
    for(let i =0; i<sentence.length;i++)
    {
    
        letter.push(sentence.charAt(i).toLowerCase());
    }

    while(letter.length!=0){
        console.log('here')
        let countLength = letter.length;
        let firstLetter = letter[0]

        console.log(countLength)
        console.log(firstLetter)
        letter = letter.filter(let=>{
            return let!==firstLetter
        })
        console.log(letter)

        letterCount.push(countLength-letter.length)
    }
}

console.log(letterCount)




