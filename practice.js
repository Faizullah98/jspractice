let myArr = [1,2,3,4,["dog","hen","fish"]];
 
document.getElementById("demo").innerHTML= myArr;

function pshFunc(){
    myArr.push([5,6,7,8]);
    document.getElementById("demo").innerHTML= myArr;
}