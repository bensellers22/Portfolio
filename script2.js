'use strict';
const submitBtn = document.querySelector('.submit');
submitBtn.addEventListener('click', sendMail);

emailjs.init("5o9qs0_v2gzCvj1RX");
function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_utmho3g";
    const templateID = "template_5e1thgh";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }

function clear(e){
    document.getElementById('feedback').value = '';
}
