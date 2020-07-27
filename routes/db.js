const express = require("express");
const router = express.Router();
var nodemailer = require("nodemailer");

router.post("/counter", (req, res) => {});

router.post("/mailer", (req, res) => {
	var transporter = nodemailer.createTransport({
		service: "Gmail",
		auth: {
			user: "pollVoice2020@gmail.com",
			pass: "PollService@2020*",
		},
	});

	var mailOptions = {
		from: "youremail@gmail.com",
		to: "ayappaganesh1995@gmail.com",
		subject: "Some one intrested in your portfolio",
		html:
			"<h4>from " +
			req.body.from +
			"</h4></br></br><p>" +
			req.body.body +
			"</p>",
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
			res.send(error);
		} else {
			console.log("Email sent: " + info.response);
			res.send("Email sent: " + info.response);
		}
	});
});
module.exports = router;
