const formEl = document.querySelector(".feedback-form");
let formData = {
    email:"",
    message:"",
};
let lsKey = "feedback-form-state";

formEl.addEventListener("input", getInputValues);
function getInputValues(event) {
    if (event.target.name === "email") {
        formData.email = event.target.value.trim();
    } if (event.target.name === "message") {
        formData.message = event.target.value.trim();
    }

    localStorage.setItem(lsKey, JSON.stringify(formData));
    
};

formEl.addEventListener("submit", formSubmit);
function formSubmit(event) {
    event.preventDefault();
    if (formData.email === "" || formData.message === "") {
        alert("Fill please all fields");
    } else {
        console.log(formData);
        localStorage.removeItem(lsKey);
        formData = {
            email: "",
            message: "",
        };
        formEl.reset();
    }
    
}
