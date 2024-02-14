let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
inputSlider.addEventListener('input', ()=>{
    sliderValue.textContent = inputSlider.value;
});


let genBtn = document.getElementById("genBtn");
let passBox = document.getElementById("passBox");
genBtn.addEventListener('click', ()=>{
    passBox.value = generatePassword();
})

function generatePassword(){
    let lowerChars = "abcdefghijklmnopqrstuvwxyz";
    let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let allNumbers = "0123456789";
    let allSymbols = "~!@#$%^&*"; 
    let genPassword = "";
    let allChars = "";

    let lowercase = document.getElementById("lowercase");
    let uppercase = document.getElementById("uppercase");
    let numbers = document.getElementById("numbers");
    let symbols = document.getElementById("symbols");

    allChars  += lowercase.checked ? lowerChars : "";
    allChars  += uppercase.checked ? upperChars : "";
    allChars  += numbers.checked ? allNumbers : "";
    allChars  += symbols.checked ? allSymbols : "";

    for(let i=1; i<=inputSlider.value; i++){
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    return genPassword;
}

let copyIcon = document.getElementById("copyIcon");
copyIcon.addEventListener('click', ()=>{
    if(passBox.value != "" || passBox.value.length >=1){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "Copied";
        copyIcon.title = "Password Copied";

        setTimeout(()=>{
            copyIcon.innerHTML = "content_copy";
            copyIcon.title = "";
        }, 3000)
    }
});