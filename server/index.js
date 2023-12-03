const express = require("express");
const cors = require("cors");
const dotdev = require('dotenv');
const bcrypt = require('bcryptjs');
const fileupload = require("express-fileupload");
const User_Schima = require("./database/schima/user");
const FromData_Schima = require("./database/schima/fromData");

dotdev.config({ path: './config.env' });
require("./database/connection");
const app = express();

app.use(fileupload());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use(cors());







//getToken API ================================= getToken API
app.post("/getToken", async (req, res) => {
	try {
		const { token } = req.body;
		const isUsrToken = await User_Schima.findOne({ "tokens.token": token });
		if (isUsrToken) {
			res.json({ "message": true, "followings": isUsrToken.followings });
		}
	}
	catch (err) {
		console.log(err);
	}
	return res.send(req.body.data);
});



//REGISTRATION API ================================= REGISTRATION API
app.post('/register', async (req, res) => {
	try {
		const { userImage, userName, userEmail, userPassword } = req.body;
		const userExist = await User_Schima.findOne({ userEmail: userEmail });
		if (userExist) {
			return res.status(422).json({ error: "User already exist" });
		} else {
			const user = new User_Schima({ userImage, userName, userEmail, userPassword });
			await user.save();
			return res.status(201).json({ message: "User register successful" });
		}
	} catch (err) {
		console.log(err);
	}
	return res.send(req.body);

});


//LOGIN API ================================= LOGIN API
app.post("/login", async (req, res) => {
	try {
		const { userEmail, userPassword } = req.body;

		const userLogin = await User_Schima.findOne({ userEmail: userEmail });

		if (userLogin) {
			const isPasordMatch = await bcrypt.compare(userPassword, userLogin.userPassword);

			if (isPasordMatch) {
				let auth_token = await userLogin.generateAuthToken();
				res.json({ "auth_token": auth_token });
			} else {
				res.status(400).json({ error: "Invalid Cradential" });
			}
		} else {
			res.status(400).json({ error: "Invalid Cradential" });
		}
	} catch (err) {
		console.log(err);
	}
	return res.send(req.body.data);
})


//getUserImage API ================================= getUserImage API
app.post("/getUserImage", async (req, res) => {
	try {
		const { token } = req.body;
		const isUsrToken = await User_Schima.findOne({ "tokens.token": token });
		if (isUsrToken) {
			res.json({ "userImg": isUsrToken.userImage });
		}
	}
	catch (err) {
		console.log(err);
	}
	return res.send(req.body.data);
});


















app.post('/addData', async (req, res) => {
	const { userImage, customerName, email, mobileNumber, address, work } = req.body;
	try {
		const userExist = await FromData_Schima.findOne({ email: email });
		if (userExist) {
			userExist.works = userExist.works.concat({ work: work });
			await userExist.save();
			return res.status(201).json({ message: "Data Submit Successfully" });
		} else {
			let works = [
				{
					work:work
				}
			]
			const fromData = new FromData_Schima({ userImage, customerName, email, mobileNumber, address, works });
			await fromData.save();
			return res.status(201).json({ message: "Data Submit Successfully" });
		}
	} catch (err) {
		console.log(err);
	}
});


app.get("/GetData", async (req, res) => {
	let result = await FromData_Schima.find();
	res.send(result);
});


const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log("Server Start");
});
