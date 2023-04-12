
function checkWhetherArmstrong(){
let sum=0;
const n=154;

let temp=n;
while(temp>0){
    let r=temp%10;
    sum+=r*r*r;
    temp = parseInt(temp / 10);
    //console.log(temp)
}
//console.log(sum)
//console.log(n)
if(sum==n){
    return  res="ArmStrongnumber"
    //console.log("Armstrong number")
}else{
    //console.log("Not a armstrong number")
    return res="Not a armstrong numbe "
}
}

checkWhetherArmstrong();
console.log(res)

