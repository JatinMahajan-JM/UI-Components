import React, { useState } from 'react'
//import axios from "axios"
import "./Footer.css"

const Footer = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    //const [success, setSuccess] = useState(-1);
    const success = -1;

    //success
    //duplicate email  --> Handled by catch block -- no message
    //resubscribe email --> Handled by catch block
    //Deleted email --> catch block

    // const submit = async (e) => {

    //     e.preventDefault();

    //     const order1 = {
    //         email: email,
    //         name: name,
    //     };

    //     const config = {
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     };

    //     try {
    //         const data = await axios.post("/", order1,
    //             config
    //         );
    //         if (data.status === 200) {
    //             setSuccess(1);
    //             setEmail("");
    //             setName("")
    //         } else {
    //             setSuccess(0)
    //         }
    //     } catch (error) {
    //         setSuccess(0)
    //     }
    // }
    return (
        <div className="footer-m-grid">
            <div className="footer-m-childs">
                <ul>
                    <li>BUSINESS</li>
                    <li>Street 54, Paris, London</li>
                    <li>Tel: 674 334 456</li>
                    <li>Opening Times</li>
                    <li>Monday-Friday: 9:00-4:00</li>
                    <li>Saturday-Sunday: Closed</li>
                </ul>
            </div>
            <div className="footer-m-childs">
                <ul>
                    <li>NAVIGATION</li>
                    <li>Home</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="footer-m-childs">
                <ul>
                    <li>CUSTOMER ASSISTANCE</li>
                    <li>Cookie Policy</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
            <div className="footer-m-childs">
                <div className="newsletter-headings">
                    <h2>JOIN OUR LIST</h2>
                    <p>Subscribe to our newsletter to get news and offers</p>
                </div>
                <form encType="multipart/form-data" className="newsletter-form">
                    <input className="n-width" required type="text" name="Name" onChange={(e) => setName(e.target.value)} title="Name" placeholder="Name" value={name} />
                    <input className="n-width" required type="email" name="Email" onChange={(e) => setEmail(e.target.value)} title="Email" placeholder="Email Address" value={email} />
                    <button className="n-width" type="submit"> SUBSCRIBE </button>
                    {success === 0 && <div className="newsletter-error">Oops! An error has occured</div>}
                    {success === 1 && <div className="newsletter-success">Congratulations, You’re Now on the list!</div>}
                </form>
            </div>
        </div>
    )
}

export default Footer