import { Request, Response } from "express";
import { Course } from "../models/courseModel";
import { Teacher } from "../models/teacherModel";
import { Student } from "../models/studentModel";

class CoursesController {
  async consultCourses(req: Request, res: Response) {
    try {
      const data = await Course.find({
        relations: { teacher: true, students: true },
      });
      res.json(data);
    } catch (err) {
      if (err instanceof Error) {
        res
          .status(500)
          .json({ error: "Error interno del servidor", detalle: err.message });
      }
    }
  }

  async consultCourseById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const register = await Course.findOne({
        where: { id: Number(id) },
        relations: { teacher: true, students: true },
      });
      if (!register) {
        return res.status(404).json({ error: "Curso no encontrado" });
      }
      res.json(register);
    } catch (err) {
      if (err instanceof Error) {
        res
          .status(500)
          .json({ error: "Error interno del servidor", detalle: err.message });
      }
    }
  }

  async createCourse(req: Request, res: Response) {
    try {
      const { teacher } = req.body;
      const teacherRegister = await Teacher.findOneBy({
        id: Number(teacher),
      });
      if (!teacherRegister) {
        return res.status(404).json({ error: "Profesor no encontrado" });
      }

      const register = await Course.save(req.body);
      res.status(201).json(register);
    } catch (err) {
      if (err instanceof Error) {
        res
          .status(500)
          .json({ error: "Error interno del servidor", detalle: err.message });
      }
    }
  }

  async updateCourse(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const { teacher } = req.body;
      const teacherRegister = await Teacher.findOneBy({
        id: Number(teacher),
      });
      if (!teacherRegister) {
        return res.status(404).json({ error: "Profesor no encontrado" });
      }
      const register = await Course.findOneBy({ id: Number(id) });
      if (!register) {
        return res.status(404).json({ error: "Curso no encontrado" });
      }

      await Course.update({ id: Number(id) }, req.body);
      const registerUpdate = await Course.findOneBy({ id: Number(id) });
      res.json(registerUpdate);
    } catch (err) {
      if (err instanceof Error) {
        res
          .status(500)
          .json({ error: "Error interno del servidor", detalle: err.message });
      }
    }
  }

  async deleteCourse(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const register = await Course.findOneBy({ id: Number(id) });
      if (!register) {
        return res.status(404).json({ error: "Curso no encontrado" });
      }

      await Course.delete({ id: Number(id) });
      res.status(204).send();
    } catch (err) {
      if (err instanceof Error) {
        res
          .status(500)
          .json({ error: "Error interno del servidor", detalle: err.message });
      }
    }
  }

  async associatedCoursesStudent(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const { student_id, course_id } = req.body;
      const student = await Student.findOneBy({ id: Number(student_id) });
      const course = await Course.findOneBy({ id: Number(course_id) });

      if (!student) {
        throw new Error("Estudiante no encontrado");
      }
      if (!course) {
        throw new Error("Curso no encontrado");
      }

      course.students = course.students || [];
      course.students.push(student);

      const registro = await Course.save(course);
      res.status(200).json(registro);
    } catch (err) {
      if (err instanceof Error) {
        res
          .status(500)
          .json({ error: "Error interno del servidor", detalle: err.message });
      }
    }
  }
}

export default new CoursesController();
