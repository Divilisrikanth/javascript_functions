function twosum(arr ,target){
  let sum=[]
  for(let i=0;i<arr.length;i++){
    for( let j=i+1;j<arr.length;j++){
       if(arr[i] + arr[j] == target){
         sum.push([arr[i],arr[j]])
       }
    }
    

  }

  //for(let j=0;j<arr.length;j++){
     // console.log(sum)
 // }
 
 // if(sum===target){
  //  return res="target is found"
 // }else{
   // return res="target is not found"
 // }
 return res=sum
}
twosum([3, 5, 2, -4, 8, 11] ,7)
console.log(res)
 