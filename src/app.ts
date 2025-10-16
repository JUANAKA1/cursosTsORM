import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import routerStudents from "./routes/studentsRouter";
import routerTeachers from "./routes/teachersRouter";
import routerCourses from "./routes/coursesRouter";

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("hola");
});
app.use("/students", routerStudents);
app.use("/teachers", routerTeachers);
app.use("/courses", routerCourses);

export default app;
