// Code your solutions in this file
function countDown(x){
   var count = x;
    while(count>=0){
        console.log(count);
        count--;
    }
}
function writeCards(x, y){  
    const newArray= []   
    for(let i = 0 ; i < x.length; i++){
        var message = `Thank you, ${x[i]}, for the wonderful ${y} gift!`;
        newArray.push(message);
    }   
    return newArray; 
}  
    
