import React, { useState } from 'react'
import axios from "axios"
import "./Mailchimp.css"

const Mailchimp = () => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [success, setSuccess] = useState(-1);

  //success
  //duplicate email  --> Handled by catch block -- no message
  //resubscribe email --> Handled by catch block
  //Deleted email --> catch block

  const submit = async(e) =>
    {

      e.preventDefault();

      const order1 = {
        email: email,
        name: name,
      };

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        const data = await axios.post("/", order1,
          config
        );
        if(data.status === 200) {
          setSuccess(1);
          setEmail("");
          setName("")
        }else {
          setSuccess(0)
        }
      } catch (error) {
        setSuccess(0)
      }
    }
    return (
      <div>
        <div>
          <div className="newsletter-headings">
            <h2>JOIN OUR LIST</h2>
            <p>Subscribe to our newsletter to get news and offers</p>
          </div>
          <form encType="multipart/form-data" className="newsletter-form" onSubmit={submit}>
            <input className="n-width" required type="text" name="Name" onChange={(e) => setName(e.target.value)} title="Name" placeholder="Name" value={name}/>
            <input className="n-width" required type="email" name="Email" onChange={(e) => setEmail(e.target.value)}  title="Email" placeholder="Email Address" value={email} />
            <button className="n-width" type="submit"> SUBSCRIBE </button>
            {success === 0 && <div className="newsletter-error">Oops! An error has occured</div>}
            {success === 1 && <div className="newsletter-success">Congratulations, You’re Now on the list!</div>}
          </form>
        </div>
      </div>
    )
  }

  export default Mailchimp