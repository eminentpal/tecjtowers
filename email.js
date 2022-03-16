const sendMessage = document.getElementById("submit");

function sendMail(params) {
  let temParams = {
    from_name: document.getElementById("name").value,
    to_name: "TECJ Towers",
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
    mobile: document.getElementById("mobile").value,
    email: document.getElementById("email").value,
  };

  const res = emailjs
    .send("service_c8oqm0f", "template_lijj8sm", temParams)
    .then(function (res) {
      console.log("success", res.status);
      if (res.status === 200) {
        document.getElementById("myForm").reset();
        document.querySelector(".success").style.visibility = "visible";
      }
    });

  console.log(res);
}

sendMessage.addEventListener("click", (e) => {
  document.querySelector(".success").style.visibility = "hidden";
  e.preventDefault();
  sendMail();
});
