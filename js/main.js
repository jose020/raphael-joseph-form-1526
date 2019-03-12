


const nameInput = document.querySelector("#fullname"),
      emailInput = document.querySelector("#email"),
      textInput = document.querySelector("#message"),
      submitBtn = document.querySelector("#submit-button");

const emailRegex = new RegExp(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
let data = {};
let errors = [];

submitBtn.addEventListener("click", submit)


function submit (e) {
  e.preventDefault();

  if(nameInput.value){
    data.fullname=nameInput.value;
  }else {
    errors.push("Full name is missing");
  }

  if (emailInput.value && emailRegex.test(emailInput.value)){
    data.email = emailInput.value
  }else if(emailInput.value && !emailRegex.test(emailInput.value)){
    errors.push("Please enter valid email")
  }else{
    errors.push("Email is missing")
  }

  if(textInput.value){
    data.message = textInput.value
  } else {
    errors.push("Message is missing")
  }

  if (errors.length > 0) {
    console.log(errors)
    errors=[]
  } else {
    console.log(data);
  }
 
}
