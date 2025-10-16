import { Router } from "express";
const routerStudents = Router();
import studentsController from "../controllers/studentsController";


routerStudents.get("/", studentsController.consultStudents);
routerStudents.post("/", studentsController.createStudent);

routerStudents
  .route("/:id")
  .get(studentsController.consultStudentById)
  .put(studentsController.updateStudent)
  .delete(studentsController.deleteStudent);

export default routerStudents;
