const express = require("express");
const router = require("./routes/router");

const usersData = require("./MOCK_DATA.json");

const app = express();

const port = process.env.PORT || 3001;

app.use(express.json());
app.use("/",router);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.json({
    status: err.status,
    success: false,
    message: err.message,
  });
});

app.listen(port, () => {
  console.log(`running port: ${port}`);
});
