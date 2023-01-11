let myArr = [1,2,3,4,["dog","hen","fish"]];
 
document.getElementById("demo").innerHTML= myArr;

function pshFunc(){
    myArr.push(Math.ceil(Math.random() *10));
    document.getElementById("demo").innerHTML= myArr;
}
const person ={
    name : "Faizullah",
    lastName : "Hussain",
    age : 25,
    address : "Skardu Baltistan"
};
document.getElementById("demo").innerHTML =JSON.stringify(person);
let ans1 = "Hellow lazy person";
let ans2 = ans1.slice(7);
let ans3 = ans1.substring(7);
console.log(ans2);
console.log("I am ans 3 "+ ans3);

// let x = BigInt(99999999);
// alert(typeof x);

const fruitName = ['Apple','Mango','Banana'];
fruitName[0].push("Lemon","Grapes");
document.getElementById("demo").innerHTML = fruitName;