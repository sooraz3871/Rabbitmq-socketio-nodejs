const randomWords = require('random-words');


const randomMessage = () =>{
    
    let randomObject={}
    
    for (let index = 0; index < 20; index++) {
        
         const randomPhrase = randomWords({ exactly: 5, join: ' ' });
         const timestamp= Date.now();
         const priority= getRandomInt(1,10);

         const newObj = {
            'message':randomPhrase,
            'timestamp':timestamp,
            'priority':priority

         }
         randomObject={...randomObject,newObj};
         console.log(randomObject);
    }

    
   
}


const getRandomInt=(min, max)=> {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }

// {
//     message: <use any random phrase generator online> 
//     timestamp: ‘’
//     priority: <random number from 1-10>
//     }
    

module.exports = { randomMessage }