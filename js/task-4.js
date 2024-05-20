const formElem = document.querySelector(".login-form");

formElem.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailValue = formElem.email.value.trim();
  const passwordValue = formElem.password.value.trim();
  const obj = {
    email: emailValue,
    password: passwordValue,
  };

  if (emailValue && passwordValue) {
    console.log(obj);
    formElem.reset();
  } else {
    alert("All form fields must be filled in");
  }
});
