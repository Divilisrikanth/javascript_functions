function checkLcmoftwonumbers(){
    let num1=4;
    let num2=3;
    let min = (num1 > num2) ? num1:num2;
    //console.log(min)
    while(true){
        if(min % num1 == 0 && min % num2 == 0){
            return res=`Lcm of ${num1} and ${num2} is ${min}`
        }
        min++
    }
}
checkLcmoftwonumbers()
console.log(res)