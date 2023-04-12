function checknumberisaprime(){
    let n=13;
    if(n===1){
       console.log("munber neither prime or composite") 
    }else if(n>1){
        for (let i=2;i<n;i++){
           if(n % i == 0){
             return res="not a prime number"
           }else{
             return res="prime number"
           }
        }
    }
}
checknumberisaprime()
console.log(res)