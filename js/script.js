// document.querySelector("#myCard").classList.toggle("flip");

function firstName()

function ValidateEmail(email) {
  let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value.match(emailFormat)) {
    document.myForm.email.focus();
    return true;
  }else {
    let error = document.getElementById('errorMsg');
    error.style.display = "d-block";
    error.innerText = "Input  a valid email address";
    return false;
  }
}