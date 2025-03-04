let LS_KEY = "feedback-form-state";
const formEl = document.querySelector(".feedback-form");
const emailEl = formEl.querySelector("input");
const messageEl = formEl.querySelector("textarea");
let formData = {
    email:"",
    message:"",
};
restoreInput();
formEl.addEventListener("input", getInputValues);
formEl.addEventListener("submit", formSubmit);

function getInputValues(event) {
    const savedData = localStorage.getItem(LS_KEY);
    if (savedData) {
        formData = JSON.parse(savedData);
    }

    if (event.target.name === "email") {
        formData.email = event.target.value.trim();
    } 
    if (event.target.name === "message") {
        formData.message = event.target.value.trim();
    }

    localStorage.setItem(LS_KEY, JSON.stringify(formData));
}

function formSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const { email, message } = form.elements;
    formData.email = email.value;
    formData.message = message.value;
    if (email.value === "" || message.value === "") {
        alert("Fill please all fields");
    } else {
        console.log(formData);
        localStorage.removeItem(LS_KEY);
        formData = {
            email: "",
            message: "",
        };
        formEl.reset();
    }
};

function restoreInput() { 
    const restoredData = JSON.parse(localStorage.getItem(LS_KEY));
    if (restoredData) {
        emailEl.value = restoredData.email;
        messageEl.value = restoredData.message;
    };
};