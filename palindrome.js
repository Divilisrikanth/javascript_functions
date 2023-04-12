function checkstringispalindrome(string){
   const arr=string.split('');
   const revarr=arr.reverse();
   const revString =revarr.join('')
   if(string==revString){
      return res="palidrome"
   }else{
      return res="Not a palidrome"
   }
}
const string="hello";
checkstringispalindrome(string)
console.log(res)