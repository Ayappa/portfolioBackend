const express = require("express");
const app = express();

var cors = require("cors");
app.use(cors());
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	next();
});

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.use(express.json({ extended: false }));

app.use("/api/db", require("./routes/db"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`server started on ${port}`);
});
