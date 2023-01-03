let inputName = document.getElementById('name');
let btn = document.getElementById('btn');
let pera = document.getElementById('peraOne');

btn.addEventListener("click", function(){
    
    if(inputName.value === rejex){
        pera.innerHTML = "Charachter shoulb be less than 10";
    }else{
        pera.innerHTML = inputName.value;
    }
});

let rejex = /Tejas/g

let text = ["Tejas", "Harishchandra", "Salunke"]

 console.log(text.find(rejex));
