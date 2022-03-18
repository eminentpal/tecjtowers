const sendMessage = document.getElementById("submit");

async function sendMail(params) {
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
        document.querySelector(".success").style.visibility = "visible";
        document.querySelector(".success-1").style.visibility = "hidden";

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

  if (
    !validateName() ||
    !validateMobile() ||
    !validateEmail() ||
    !validateSubject() ||
    !validateMessage()
  ) {
    return alert("Please fill in all fields");
  } else {
    document.querySelector(".success").style.visibility = "hidden";

    document.getElementById("name").required = true;
    document.getElementById("submit").disabled = true;
    document.getElementById("submit").style.opacity = 0.3;
    sendMail();
  }
});

///for book us form

const bookUs = document.getElementById("book-now");

async function Book(params) {
  let temParams = {
    from_name: document.getElementById("name-1").value,
    to_name: "TECJ Towers",
    subject: document.getElementById("subject-1").value,
    message: document.getElementById("message-1").value,
    mobile: document.getElementById("mobile-1").value,
    email: document.getElementById("email-1").value,
  };

  const res = await emailjs
    .send("service_c8oqm0f", "template_lijj8sm", temParams)
    .then(function (res) {
      console.log("success", res.status);
      if (res.status === 200) {
        document.getElementById("myForm-1").reset();
        document.querySelector(".success-message").style.visibility = "visible";

        document.getElementById("book-now").disabled = false;
        document.getElementById("book-now").style.opacity = 10;
      }
    })
    .catch((error) => {
      document.getElementById("book-now").disabled = false;
      document.getElementById("book-now").style.opacity = 10;
    });
}

bookUs.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    !validateFname() ||
    !validateMob() ||
    !validateEmailMes() ||
    !validateSub() ||
    !validateMsg()
  ) {
    return alert("Please fill in all fields");
  }
  document.querySelector(".success-message").style.visibility = "hidden";

  document.getElementById("book-now").disabled = true;
  document.getElementById("book-now").style.opacity = 0.3;
  Book();
});

//validation
const fullName = document.getElementById("name");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const mobile = document.getElementById("mobile");
const email = document.getElementById("email");

function validateName() {
  if (fullName.value.length === 0) {
    fullName.style.border = "2px solid rgb(206, 112, 112)";
    return false;
  } else {
    fullName.style.border = "2px solid #d4d5df";
    return true;
  }
}

function validateSubject() {
  if (subject.value.length === 0) {
    subject.style.border = "2px solid rgb(206, 112, 112)";
    return false;
  } else {
    subject.style.border = "2px solid #d4d5df";
    return true;
  }
}

function validateMessage() {
  if (message.value.length === 0) {
    message.style.border = "2px solid rgb(206, 112, 112)";
    return false;
  } else {
    message.style.border = "2px solid #d4d5df";
    return true;
  }
}

function validateMobile() {
  if (mobile.value.length === 0) {
    mobile.style.border = "2px solid rgb(206, 112, 112)";
    return false;
  }

  //   else if (
  //     !mobile.value.match(
  //       /^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
  //     )
  //   ) {
  //     alert("Please enter valid phone number");
  //     mobile.style.border = "2px solid rgb(206, 112, 112)";
  //     return false;
  //   }
  else {
    mobile.style.border = "2px solid #d4d5df";
    return true;
  }
}

function validateEmail() {
  let validEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (email.value.length === 0) {
    email.style.border = "2px solid rgb(206, 112, 112)";
    return false;
  } else if (!email.value.match(validEmail)) {
    alert("Please enter valid email");
    emailMessage.style.border = "2px solid rgb(206, 112, 112)";
    return false;
  } else {
    email.style.border = "2px solid #d4d5df";
    return true;
  }
}

//validation form two
const fName = document.getElementById("name-1");
const sub = document.getElementById("subject-1");
const msg = document.getElementById("message-1");
const mob = document.getElementById("mobile-1");
const emailMessage = document.getElementById("email-1");

function validateFname() {
  if (fName.value.length === 0) {
    fName.style.border = "2px solid rgb(206, 112, 112)";
    return false;
  } else {
    fName.style.border = "2px solid #d4d5df";
    return true;
  }
}

function validateSub() {
  if (sub.value.length === 0) {
    sub.style.border = "2px solid rgb(206, 112, 112)";
    return false;
  } else {
    sub.style.border = "2px solid #d4d5df";
    return true;
  }
}

function validateMsg() {
  if (msg.value.length === 0) {
    msg.style.border = "2px solid rgb(206, 112, 112)";
    return false;
  } else {
    msg.style.border = "2px solid #d4d5df";
    return true;
  }
}

function validateMob() {
  if (mob.value.length === 0) {
    mob.style.border = "2px solid rgb(206, 112, 112)";
    return false;
  } else {
    mob.style.border = "2px solid #d4d5df";
    return true;
  }
}

function validateEmailMes() {
  let validEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (emailMessage.value.length === 0) {
    emailMessage.style.border = "2px solid rgb(206, 112, 112)";
    return false;
  } else if (!emailMessage.value.match(validEmail)) {
    alert("Please enter valid email");
    emailMessage.style.border = "2px solid rgb(206, 112, 112)";
    return false;
  } else {
    emailMessage.style.border = "2px solid #d4d5df";
    return true;
  }
}
