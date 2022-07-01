
'use strict'


const filterByPriorityAndSend = (messages,socket) => {
    
    const rawMessages=JSON.parse(messages);
      const newArr = rawMessages.filter(item=>{
        return item.priority >7;
      })

      const data = JSON.stringify(newArr);
      
      if(newArr.length > 0){
        socket.emit('random',data);
      }

}

module.exports ={filterByPriorityAndSend}