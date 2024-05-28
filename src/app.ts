
import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import globalErrorHandler from "./app/middlwares/globalErrorHandler";
import notFound from "./app/middlwares/notFound";
import router from "./app/routes";
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//application routes
app.use("/api/v1", router);



//global error handler
app.use(globalErrorHandler);

//not found
app.use(notFound);

export default app;
