const prompt = require('prompt-sync')();
const parse = require('csv-parse');

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
        let countLength = letter.length;
        let firstLetter = letter[0]
        letter = letter.filter(let=>{
            return let!==firstLetter
        })

        letterCount.push(countLength-letter.length)
    }
}
console.log(matchPercentage(letterCount));

function matchPercentage(countLetter){
    let newSum = []
    for(let i=0; i<countLetter.length;i++){
        if(i>countLetter.length-1-i){
            break;
        }
        if(i===countLetter.length-1-i){
            newSum.push(countLetter[i])
            break;
        }else {
            let num = countLetter[i]+countLetter[(countLetter.length-1)-i]
            if(num>9){

                newSum.push(parseInt(num.toString().charAt(0)))
                newSum.push(parseInt(num.toString().charAt(1)))
            }else{
              
                newSum.push(num)

            }
           
        }
    }

    if(parseInt(newSum.join(""))<=100){
        return parseInt(newSum.join(""));
    }else{
        return matchPercentage(newSum)
    }
}

const males = [];
const females =[];
//const users =[];
//fs.createReadStream('data.csv')
 // .pipe(csv())
 // .on('data', function (row){
    //  const user = {
     //   name: row,
     //   gender: row
   // }
  // users.push(user);
   // console.log(row);
   
    //console.log(users);
 // })


 const fs = require('fs'); 
 let statusF = true;
 let statusM = true;
 const data = [];
 fs.createReadStream('data2.csv')
   .pipe(parse({ delimiter: ';' }))
   .on('data', (r) => {
    // console.log(r);
     data.push(r); 
            
   })
   .on('end', () => {
       for(let i= 0; i<data.length;i++)
{
           const gender = data[i][1];
           const personName = data[i][0];
           console.log(data[i]);
           console.log(gender);
        
    if(gender.toLowerCase() === 'f')
    {
         females.push(personName);
    }
     else if(gender.toLowerCase() === 'm')
    {
        males.push(personName);
    }  
       
}
    
  });
