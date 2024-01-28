let captcha="abcdefghigklmnopqrstuvwxyz0123456789"
let clickMe=document.querySelector("button.click")
let divCaptcha=document.querySelector("div.captcha")
let capt=document.querySelector("input#capt")
let captBtn=document.querySelector("button.captBtn")
clickMe.addEventListener("click",function(){
    generateData()
})

captBtn.addEventListener("click",function(){
    if(capt.value===generate){
        console.log("ok");
        
    }else{
        console.log("error");
        generateData()

    }
})
function generateData(){
    generate=captcha.charAt(Math.random()*36)+
    captcha.charAt(Math.random()*36)+
    captcha.charAt(Math.random()*36)+
    captcha.charAt(Math.random()*36)+
    captcha.charAt(Math.random()*36)+
    captcha.charAt(Math.random()*36)
    divCaptcha.innerText=generate

}