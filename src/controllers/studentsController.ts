import { Request, Response } from "express";
import { Student } from "../models/studentModel";

class StudentsController {
  async consultStudents(req: Request, res: Response) {
    try {
      const data = await Student.find();
      res.json(data);
    } catch (err) {
      if (err instanceof Error) {
        res
          .status(500)
          .json({ error: "Error interno del servidor", detalle: err.message });
      }
    }
  }

  async consultStudentById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const register = await Student.findOneBy({ id: Number(id) });
      if (!register) {
        return res.status(404).json({ error: "Estudiante no encontrado" });
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

  async createStudent(req: Request, res: Response) {
    try {
      const register = await Student.save(req.body);
      res.status(201).json(register);
    } catch (err) {
      if (err instanceof Error) {
        res
          .status(500)
          .json({ error: "Error interno del servidor", detalle: err.message });
      }
    }
  }

  async updateStudent(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const register = await Student.findOneBy({ id: Number(id) });
      if (!register) {
        return res.status(404).json({ error: "Estudiante no encontrado" });
      }

      await Student.update({ id: Number(id) }, req.body);
      const registerUpdate = await Student.findOneBy({ id: Number(id) });
      res.json(registerUpdate);
    } catch (err) {
      if (err instanceof Error) {
        res
          .status(500)
          .json({ error: "Error interno del servidor", detalle: err.message });
      }
    }
  }

  async deleteStudent(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const register = await Student.findOneBy({ id: Number(id) });
      if (!register) {
        return res.status(404).json({ error: "Estudiante no encontrado" });
      }

      await Student.delete({ id: Number(id) });
      res.status(204).send();
    } catch (err) {
      if (err instanceof Error) {
        res
          .status(500)
          .json({ error: "Error interno del servidor", detalle: err.message });
      }
    }
  }
}

export default new StudentsController();
