
import emailjs from 'emailjs-com';
import React  from 'react';
import { useStoreContext } from "../utils/GlobalState";

export default function ContactUs() {
  const [state] = useStoreContext();
  function sendEmail(e) {

    e.preventDefault();

    emailjs.sendForm('service_1fnncxg', 'template_xmsmsvv', e.target, 'user_TrEpjPwTr5hyyH0hHHgFs')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <div className="container">
        <form onSubmit={sendEmail} id="template_xmsmsvv" style={{ display: "block", paddingTop: 10, paddingLeft: 25, textAlign: "left" }}>
          <input type="hidden" name="to_name" value={state.currentMember.firstName} />
          <input type="hidden" name="to_email" value={state.currentMember.email} />
          <label>Name</label> <br />
          <input type="text" name="from_name" /> <br />
          <label>Email</label> <br />
          <input type="email" name="to_email" /> <br />
          <label>Message</label> <br />
          <textarea name="message" /> <br />
          <input type="submit" value="Send" />  
        </form>
      </div>
  );
}