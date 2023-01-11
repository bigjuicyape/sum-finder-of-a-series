
let p = document.getElementById("p").innerHTML
let sum = 0
let d = 0
let num = 0

const button = document.getElementById("button")
entervalues()
function entervalues(){
let t1 = document.getElementById("t1").value 
let t2 = document.getElementById("t2").value;
let t3 = document.getElementById("t3").value;
let tn = document.getElementById("tn").value;
let num = ((tn - t1) / d) + 1;
document.getElementById("p").innerHTML = `_${t1}_ ,  _${t2}_ ,  _${t3}_  ...  _${tn}_`

if((t2 - t1) === (t3 - t2) && tn !== null){
    d = t2 - t1
    num = ((tn - t1) / d) + 1
    if(tn !== ""){
document.getElementById("p").innerHTML = `_${t1}_ ,  _${t2}_ ,  _${t3}_  ...  _${tn}_   # of terms _${num}_`
    }
}
requestAnimationFrame(entervalues)
}

function findSum(){
let t1 = document.getElementById("t1").value 
let t2 = document.getElementById("t2").value;
let t3 = document.getElementById("t3").value;
let tn = document.getElementById("tn").value;
if((t2 - t1) === (t3 - t2) && tn !== ""){
d = t2 - t1
num = ((tn - t1) / d) + 1
sum = (num * (2 * t1 + d * (num - 1)) / 2)
document.getElementById("error").innerHTML = `sum = ${sum}`
} else {
document.getElementById("error").innerHTML = `error`
}
requestAnimationFrame(entervalues)
}



function finda(){
let angleb = document.getElementById("angleb").value 
let anglec = document.getElementById("anglec").value 
let A = 2
}

// for (let i = 1; i > 0; i++){
// }