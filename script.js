let inputName = document.getElementById('name');
let btn = document.getElementById('btn');
let pera = document.getElementById('peraOne');
let rejex = new RegExp(/[0-9]/g);
let rejexDigit = new RegExp(/[a-z]/g);

btn.addEventListener("click", function(){
    
    if(rejex.test(inputName.value) || rejexDigit.test(inputName.value)){
        console.log(inputName.value);
    }else{
        pera.innerHTML = "Entered input should not be contained special charachters";
    }
});



