function numberToLetters(array){
  let s="";
  array.map(e=>{
    if(Number(e) == 27){
      s+='!';
    }
    else if(Number(e) == 28){
      s+='?';
    }
    else if(Number(e) == 29){
      s+='.';
    }
    else if(Number(e) == 30){
      s+=' ';
    }
    else{
      s+=String.fromCharCode(98+Number(e))
    }
    
  })
  s = [...s].reverse().join("");
  return s;
}

console.log(numberToLetters(['17','8','27']));