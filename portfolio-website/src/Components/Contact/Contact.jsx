import "./Contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vqezj9z",
        "template_4truqen",
        formRef.current,
        "user_rY3BWT4qwmUB7Gf6d39lH"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c" id="contact"> 
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">CONTACT</h1>
          <div className="c-info">
            <div className="c-info-item">📞 +91 9582611037</div>
            <div className="c-info-item">📧 afnanalam26@gamil.com</div>
            <div className="c-info-item">
              📍 New Delhi, India
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Don't be shy! </b> Get in touch!
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <br />
            <input type="text" placeholder="Subject" name="user_subject" />
            <br />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "   Mail send..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
