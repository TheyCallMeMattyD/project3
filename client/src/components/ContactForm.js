import emailjs from 'emailjs-com';
import React from 'react';


export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_1fnncxg', 'template_xmsmsvv', e.target, 'user_TrEpjPwTr5hyyH0hHHgFs')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
}

  return(
    <div className="container">
    <form onSubmit={sendEmail} id="template_xmsmsvv">

      
      <input type="hidden" name="to_name" />
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="to_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> </div>

  );
}