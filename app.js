const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
// const input = document.getElementById("input");

const copyIcon = document.querySelector(".fa-copy");
const msg = document.querySelector(".alert-container");

btn.addEventListener("click", () => {
    createPassword();
});

function createPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    let password = "";

    for(let i=0; i<=passwordLength; i++){
        let randomNo = Math.floor(Math.random()*chars.length);

        password += chars[randomNo];

        // console.log(randomNo,password);
    }
    input.value = password;
    msg.innerText = password + " copied!";
}

copyIcon.addEventListener("click", () => {
    if(input.value){
        copyPass();
        msg.classList.remove("active");
        setTimeout(() => {
            msg.classList.add("active");
        }, 1500);
    }
});

function copyPass(){
    input.select();
    input.setSelectionRange(0, 9999);  //for mobile devices
    navigator.clipboard.writeText(input.value);
}
