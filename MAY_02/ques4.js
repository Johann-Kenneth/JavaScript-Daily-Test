var arr1=[1,2,3,4]
var arr2=[3,4,5,6]
var res=[]
for(var i=0;i<arr1.length;i++){
     for(var j=0;j<arr2.length;j++){
        if(arr1[i]==arr2[j])
            res.push(arr1[i])
     }
    
}
console.log(res);