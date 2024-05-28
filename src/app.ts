
import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import notFound from "./app/middleware/notFound";
import router from "./app/routes";
const app: Application = express();
//middleware

//parser
app.use(express.json());
app.use(cors());

//application routes
app.use("/api/v1", router);

// const test = (req:Request, res:Response)=>{
//     const a= 10;
//     res.send(a)
// }

// app.get('/', test)

app.get('/', (req: Request, res: Response) => {
    res.send('<h2 style="color:#119FB0 ;text-align:center; margin:15% auto; font-size:48px; font-weight: 900;">🎓This is a <span  style="color:#68037A"> University</span> Server is Running !!!  🔥🏫</h2>')
  })
//global error handler
app.use(globalErrorHandler);

//not found middleware
app.use(notFound);

export default app;
