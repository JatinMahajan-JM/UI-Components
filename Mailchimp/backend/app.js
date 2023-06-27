const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const axios = require('axios')
const MD5 = require("crypto-js/md5")

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.post("/", async (req, res, next) => {
    const firstName = req.body.name; 
    let email = req.body.email
    email = email.toLowerCase();
    let mailchimpEmailId = MD5(email);

    console.log(email)

    var postData = {
        email_address: email,
        status: "subscribed",
        merge_fields: {
            FNAME: firstName,
        },
    };

    var emailData = {
        email_address: mailchimpEmailId,
        status_if_new: "subscribed",
        merge_fields: {
            FNAME: firstName,
        },
    }
    
    let axiosConfig = {
        headers: {
            'authorization': "Basic " + Buffer.from('randomstring:68612f740358c7a5710102d6cbc1833c-us14').toString('base64'),
            'Accept': 'application/json',
            'Content-Type': 'application/json'  
        }
    };

    try {
        await axios.post('https://us14.api.mailchimp.com/3.0/lists/9736fa7dbe/members', postData, axiosConfig)
        res.status(200).json({
            success: true,
        });
    }
    catch (err) {
        await axios.put(`https://us14.api.mailchimp.com/3.0/lists/9736fa7dbe/members/${mailchimpEmailId}`, emailData, axiosConfig)
        res.status(201).json({
            success: false,
        });
    }
})

module.exports = app;