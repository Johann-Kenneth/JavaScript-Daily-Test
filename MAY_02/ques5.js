function palindrome(str){
var rev=""
for(var i=0;i<str.length;i++){
    rev=str.charAt(i)+rev 
}
if(str==rev){
    console.log("True")
}
else{
    console.log("False");
}
}
console.log(palindrome("madam"));
console.log(palindrome("peace"));
