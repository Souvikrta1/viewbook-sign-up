const fonts = ['cursive', 'sans-serif', 'serif', 'monospace'];
let captchaValue = "";

function generateCaptcha() {
    let value = btoa(Math.random() * 1000000000);
    value = value.slice(0, 5)
    captchaValue = value;
}

const showCaptcha = document.querySelector(".captcha-show");

function setCaptcha() {
    let newCaptcha = captchaValue.split("").map((ele) => {
        const rotate = -20 + Math.trunc(Math.random() * 30);
        const font = Math.trunc(Math.random() * fonts.length);
        return `<span style="transform : rotate(${rotate}deg) font-family : ${fonts[font]}">
                    ${ele}
                </span>`
    }).join("")
    showCaptcha.innerHTML = newCaptcha;
}
    
document.querySelector("#refresh-captcha").addEventListener("click", () => {
        generateCaptcha();
        setCaptcha();
    })

generateCaptcha();
setCaptcha();

const form = document.querySelector(".sign-up-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let fullName = e.target.full_name.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    let captcha = e.target.captcha.value;
    if(captcha == captchaValue){
        alert("Sign Up Done")
        form.reset()
        generateCaptcha();
        setCaptcha();
    } else {
        alert("Wrong Captcha")
        generateCaptcha();
        setCaptcha();
    }
})

const theme = document.querySelector("#theme-change");

theme.addEventListener('click',(e)=>{
    if(e.target.innerText == 'Dark Mode'){
        e.target.innerText = 'Light Mode'
        document.querySelector('body').style.backgroundColor = 'black'
        document.querySelector(".form-wrapper").style.backgroundColor = 'rgb(68, 68, 68)'
        document.querySelectorAll("label").forEach((ele)=>{ele.style.color = 'white'})
    } else {
        e.target.innerText = 'Dark Mode'
        document.querySelector('body').style.backgroundColor = 'white'
        document.querySelector(".form-wrapper").style.backgroundColor = 'rgb(216, 214, 212)'
        document.querySelectorAll("label").forEach((ele)=>{ele.style.color = 'black'})
    }
})