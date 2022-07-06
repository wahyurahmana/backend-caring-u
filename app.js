if (process.env) {
    require("dotenv").config();
}
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

const allRouter = require("./routes/index");
const errorHandler = require("./middlewares/ErrorHandler");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(allRouter);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
