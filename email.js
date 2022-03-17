const sendMessage = document.getElementById("submit");

async function sendMail(params) {
  let temParams = {
    from_name: fullName.value,
    to_name: "TECJ Towers",
    subject: subject.value,
    message: message.value,
    mobile: mobile.value,
    email: email.value,
  };

  const res = await emailjs
    .send("service_c8oqm0f", "template_lijj8sm", temParams)
    .then(function (res) {
      console.log("success", res.status);
      if (res.status === 200) {
        document.getElementById("myForm").reset();
        document.querySelector(".success").style.visibility = "visible";

        document.getElementById("submit").disabled = false;
        document.getElementById("submit").style.opacity = 10;
      }
    })
    .catch((error) => {
      document.getElementById("submit").disabled = false;
      document.getElementById("submit").style.opacity = 10;
    });

  console.log(res);
}

//for contact us

sendMessage.addEventListener("click", (e) => {
  e.preventDefault();

  if (!validateName()) {
    return;
  } else {
    document.querySelector(".success").style.visibility = "hidden";

    document.getElementById("name").required = true;
    document.getElementById("submit").disabled = true;
    document.getElementById("submit").style.opacity = 0.3;
    sendMail();
  }
});

//validation

function validateName() {
  console.log(fullName.value.length);
  if (fullName.value.length === 0) {
    alert("name is required");

    fullName.style.border = "2px solid rgb(206, 112, 112)";
    return false;
  } else {
    fullName.style.border = "2px solid #d4d5df";
    return true;
  }
}

///for book us form

const bookUs = document.getElementById("book-now");

async function Book(params) {
  let temParams = {
    from_name: document.getElementById("name").value,
    to_name: "TECJ Towers",
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
    mobile: document.getElementById("mobile").value,
    email: document.getElementById("email").value,
  };

  const res = await emailjs
    .send("service_c8oqm0f", "template_lijj8sm", temParams)
    .then(function (res) {
      console.log("success", res.status);
      if (res.status === 200) {
        document.getElementById("myForm").reset();
        document.querySelector(".success-message").style.visibility = "visible";

        document.getElementById("book-now").disabled = false;
        document.getElementById("book-now").style.opacity = 10;
      }
    })
    .catch((error) => {
      document.getElementById("book-now").disabled = false;
      document.getElementById("book-now").style.opacity = 10;
    });

  console.log(res);
}

bookUs.addEventListener("click", (e) => {
  e.preventDefault();

  document.querySelector(".success-message").style.visibility = "hidden";

  document.getElementById("book-now").disabled = true;
  document.getElementById("book-now").style.opacity = 0.3;
  Book();
});
