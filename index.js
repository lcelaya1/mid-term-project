const menu = document.querySelector(".nav-menu");
const mobile = document.querySelector(".menu-mobile");

menu.addEventListener("click", () => {
    menu.classList.toggle("close");
    mobile.classList.toggle("show");
})

mobile.addEventListener("click", hamburger => {
    if(hamburger.target.id === "menu-mobile") {
        mobile.classList.remove("show");
        menu.classList.remove("close"); 
    }
})

const form = document.getElementById("email");
const email = form.elements["Email"]

function showMessage (input, message, type){
    const msg = input.parentNode.querySelector("small");
    msg.innerText = message;
    input.className = type ? "sucess" : "error";
    return type;
}

function showError (input, message) {
    return showMessage(input, message, false);
}

function showSucess (input) {
    return showMessage(input, "", true);
}

function hasValue (input, message) {input.value.trim() === "" ? showError(input, message) : showSucess(input)};

function validateEmail (input, requireMessage, invalidMessage) {
    if(!hasValue(input, requireMessage)) {
        return false;
    };
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const emailValue = email.value.trim();
    if(!mailformat.test(emailValue)) {
        return showError(input, invalidMessage)
    };
    return true;
}

const formField = document.querySelector(".email-input");
const emailRequired = "Please enter your email";
const emailInvalid = "Please enter a correct email address";

formField.addEventListener("submit", function(event) {
    event.preventDefault();
    let validEmail = validateEmail(email, emailRequired, emailInvalid);
    if(validEmail) {
        form.submit();
    }
})