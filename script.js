const fname=document.getElementById("name");
const email=document.getElementById("email");
const message=document.getElementById("message");
const phone=document.getElementById("phone");
const submit = document.getElementsByClassName("form-contact")[0];

submit.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("clicked");
    // console.log(fname.value);
    // console.log(email.value);
    // console.log(phone.value);
    // console.log(message.value);



    //email template
    let ebody =`
    <br>
    <b>Name:</b>${fname.value};
    <br>
    <b>Email: </b>${email.value};
    <br>
    <b>Email: </b>${phone.value};
    <br>
    <b>Message: </b>${message.value};
    <br>
     `


    //email code here
    Email.send({
        SecureToken : "04abd108-5bb8-4df0-926f-b37b358d3a72",
        To : 'shivam@gmail.com',
        From : "shivamjitendraverma@gmail.com",
        Subject : "email for sure4usolutions website from  "+ email.value,
        Body : ebody
    }).then(
      message => {alert("Message send!");
       // Clear the form fields
       fname.value = '';
       email.value = '';
       phone.value ='';
       message.value = '';
      }
    );
    
    

});