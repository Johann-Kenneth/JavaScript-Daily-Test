var arr=[1,1,2,3,3,4,5,5]
var answer=[]
for(var i=0;i<arr.length;i++){
    if(arr[i]!=arr[i+1]){
        answer+=arr[i]
    }
}
console.log(answer);