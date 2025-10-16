import { Router } from "express";
const routerTeachers = Router();
import teacherController from "../controllers/teachersController";


routerTeachers.get("/", teacherController.consultTeachers);
routerTeachers.post("/", teacherController.createTeacher);

routerTeachers
  .route("/:id")
  .get(teacherController.consultTeacherById)
  .put(teacherController.updateTeacher)
  .delete(teacherController.deleteTeacher);

export default routerTeachers;
