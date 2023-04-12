function checknumberiscomposite(){
  let num=21;
  let i=1;
  let count =0;

  do{
    if(num%i==0)
     count++
   i++  
  }while(i<=num);
if(count>2){
    return res="composite number"
}else{
    return res="not a composite number"
}
}

checknumberiscomposite()
console.log(res)