let a = document.querySelector('.out');
for (let i = 0; i < 5; i++){
    for (let k = 1; k < 11; k++) {
        a.innerHTML += k+' ';
    }
    a.innerHTML += "<br>";
}

for (let i = 1; i < 9; i++) {
    // a.innerHTML += '3*' + i + "=" + (i * 3) + "<br>"
    a.innerHTML+=`3 * ${i}=${3*i}<br>`
}

let b = document.querySelector('.out1');
function f1() {
    for (let i = 0; i < 3; i++){
        for (let k = 0; k < 3; k++){
  b.innerHTML += '*';
        }
          b.innerHTML += '_';
    }
}
document.querySelector('.b1').onclick=f1


let a1 = document.querySelector('.out2');
function f2() { 
    let out = '';
    for (let i = 1; i < 4; i++) { 
        for (let k = 0; k < 4; k++){
out +="*_"
        }
       out+=`<br>${i}<br>`
    }
a1.innerHTML = out;
}
document.querySelector('.b2').onclick = f2;


let a3 = document.querySelector('.out3');
function f3() {
    out = ' ';
    for (let i = 0; i < 4; i++){
        for (let k = 0; k < 3; k++){
            out += '*' + '_';
        }
        out+='<br>'
    }
    a3.innerHTML = out;
}
document.querySelector('.btn3').onclick = f3;


let a4 = document.querySelector('.out4');
function f4() {
    out = ' ';
    for (let i = 1; i < 4; i++){
        out += i + '_';
        for (let j = 1; j < 5; j++){
         out+=j+"*"
        }
    
    }
    a4.innerHTML = out;
}
document.querySelector('.btn4').onclick = f4;

// for (let i = 1; i < 9; i++) {
//     // a.innerHTML += '3*' + i + "=" + (i * 3) + "<br>"
//     a.innerHTML+=`3 * ${i}=${3*i}<br>`
// }