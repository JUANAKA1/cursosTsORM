import { Router } from "express";
import coursesController from "../controllers/coursesController";

const routerCourses = Router();

routerCourses.get("/", coursesController.consultCourses);
routerCourses.post("/", coursesController.createCourse);
routerCourses.post("/registerStudent", coursesController.associatedCoursesStudent);

routerCourses
  .route("/:id")
  .get(coursesController.consultCourseById)
  .put(coursesController.updateCourse)
  .delete(coursesController.deleteCourse);

export default routerCourses;
