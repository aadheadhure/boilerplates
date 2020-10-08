import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

const app = express();

app.use(morgan("common"));
app.use(cors());
app.use(helmet());

app.listen(parseInt(process.env.PORT ?? "3000"), () => {
    console.log("Listening at port 3000");
});
