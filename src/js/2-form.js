// with help

let LS_KEY = "feedback-form-state";
const formEl = document.querySelector(".feedback-form");
const emailEl = formEl.querySelector("input");
const messageEl = formEl.querySelector("textarea");

restoreInput();

formEl.addEventListener("input", getInputValues);
formEl.addEventListener("submit", formSubmit);

function getInputValues(event) {
    let savedData = localStorage.getItem(LS_KEY);
    let formData = savedData ? JSON.parse(savedData) : { email: "", message: "" };
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(LS_KEY, JSON.stringify(formData));
}

function formSubmit(event) {
    event.preventDefault();
    
    const formData = {
        email: emailEl.value.trim(),
        message: messageEl.value.trim(),
    };

    if (formData.email === "" || formData.message === "") {
        alert("Please fill in all fields.");
        return;
    }

    console.log(formData);
    localStorage.removeItem(LS_KEY);
    formEl.reset();
}

function restoreInput() { 
    const savedData = localStorage.getItem(LS_KEY);
    if (savedData) {
        const { email, message } = JSON.parse(savedData);
        emailEl.value = email || "";
        messageEl.value = message || "";
    }
}

// trial #4
// let LS_KEY = "feedback-form-state";
// const formEl = document.querySelector(".feedback-form");
// const emailEl = formEl.querySelector("input");
// const messageEl = formEl.querySelector("textarea");
// let formData = {
//     email:"",
//     message:"",
// };
// restoreInput();
// formEl.addEventListener("input", getInputValues);
// formEl.addEventListener("submit", formSubmit);

// function getInputValues(event) {
//     if (event.target.name === "email") {
//         formData.email = event.target.value.trim();
//     } if (event.target.name === "message") {
//         formData.message = event.target.value.trim();
//     }
//     localStorage.setItem(LS_KEY, JSON.stringify(formData));
// };

// function formSubmit(event) {
//     event.preventDefault();
//     const form = event.currentTarget;
//     const { email, message } = form.elements;
//     formData.email = email.value;
//     formData.message = message.value;
//     if (email.value === "" || message.value === "") {
//         alert("Fill please all fields");
//     } else {
//         console.log(formData);
//         localStorage.removeItem(LS_KEY);
//         formData = {
//             email: "",
//             message: "",
//         };
//         formEl.reset();
//     }
// };

// function restoreInput() { 
//     const savedData = localStorage.getItem(LS_KEY);
//     if (savedData) {
//         const restoredData = JSON.parse(savedData);
//         emailEl.value = restoredData.email;
//         messageEl.value = restoredData.message;
//     };
// };
// function restoreInput() { 
//     const savedData = localStorage.getItem(LS_KEY);
//     if (savedData) {
//         const restoredData = JSON.parse(savedData);
//         const { email, message } = restoredData;
//         formEl.elements.email.value = email;
//         formEl.elements.message.value = message;
//     };
// };

// Trial #3 my with a little combinational corrections - still working the samr way and has the same bug
// let LS_KEY = "feedback-form-state";
// const formEl = document.querySelector(".feedback-form");
// const emailEl = formEl.querySelector("input");
// const messageEl = formEl.querySelector("textarea");
// let formData = {
//     email:"",
//     message:"",
// };
// restoreInput();
// formEl.addEventListener("input", getInputValues);
// formEl.addEventListener("submit", formSubmit);

// function getInputValues(event) {
//     if (event.target.name === "email") {
//         formData.email = event.target.value.trim();
//     } if (event.target.name === "message") {
//         formData.message = event.target.value.trim();
//     }
//     localStorage.setItem(LS_KEY, JSON.stringify(formData));
// };

// function formSubmit(event) {
//     event.preventDefault();
//     const form = event.currentTarget;
//     const { email, message } = form.elements;
//     formData.email = email.value;
//     formData.message = message.value;
//     if (email.value === "" || message.value === "") {
//         alert("Fill please all fields");
//     } else {
//         console.log(formData);
//         localStorage.removeItem(LS_KEY);
//         formData = {
//             email: "",
//             message: "",
//         };
//         formEl.reset();
//     }
// };

// function restoreInput() { 
//     const restoredData = JSON.parse(localStorage.getItem(LS_KEY));
//     if (restoredData) {
//         emailEl.value = restoredData.email;
//         messageEl.value = restoredData.message;
//     };
// };

// trial to repeat the teacher's steps but got confused.
// let LS_KEY = "feedback-form-state";
// const formEl = document.querySelector(".feedback-form");
// const emailEl = formEl.querySelector("input");
// const messageEl = formEl.querySelector("textarea");
// let formData = {
//     email:"",
//     message:"",
// };
// console.log(formEl.elements.email.value);
// restoreData();

// formEl.addEventListener("submit", formSubmit);
// function formSubmit(event) {
//     event.preventDefault();
//     const form = event.currentTarget;
//     // new FormData(form);
//     const { email, message } = form.elements;
//     formData.email = email.value;
//     formData.message = message.value;
//     console.log(formData);

//     localStorage.removeItem(LS_KEY);
//     form.reset();  
// };

// formEl.addEventListener("input", saveInputValues);
// function saveInputValues(event) {
//     // Yaroslav's example pattern:
//     // const emailInput = event.target.value;
//     // 

//     localStorage.setItem(LS_KEY, JSON.stringify(formData));
// };

// function restoreData() {
//     const restoredData = JSON.parse(localStorage.getItem(LS_KEY));
//     if (!restoredData) {
//         return;
//     } else
//         emailEl.value = restoredData.email;
//         messageEl.value = restoredData.message;
// };

// My First Try - worked but with bug after the page reloading
// const formEl = document.querySelector(".feedback-form");
// const emailEl = formEl.querySelector("input");
// const messageEl = formEl.querySelector("textarea");
// let formData = {
//     email:"",
//     message:"",
// };
// let LS_KEY = "feedback-form-state";

// formEl.addEventListener("input", getInputValues);
// function getInputValues(event) {
//     if (event.target.name === "email") {
//         formData.email = event.target.value.trim();
//     } if (event.target.name === "message") {
//         formData.message = event.target.value.trim();
//     }
    
//     localStorage.setItem(LS_KEY, JSON.stringify(formData));
    
// };

// formEl.addEventListener("submit", formSubmit);
// function formSubmit(event) {
//     event.preventDefault();
//     if (formData.email === "" || formData.message === "") {
//         alert("Fill please all fields");
//     } else {
//         console.log(formData);
//         localStorage.removeItem(LS_KEY);
//         formData = {
//             email: "",
//             message: "",
//         };
//         formEl.reset();
//     }
    
// };

// if (localStorage.getItem(LS_KEY) !== null) {
//         const restoredData = JSON.parse(localStorage.getItem(LS_KEY));

//         emailEl.value = restoredData.email;
//         messageEl.value = restoredData.message;
        
// };