const express = require("express");
const app = express();
require("dotenv").config();
require("colors");
app.listen(process.env.PORT, () => console.log(`The Site is Running on Port ${process.env.PORT.cyan}`));

app.use("/",require("./Routes/productroutes"))
// yahan per uper hum na Routes APIs ki aik new file create ki or yahan " app.use " kay aik function ki maddad sa saaray routes ko apny main file ma lay ayy


