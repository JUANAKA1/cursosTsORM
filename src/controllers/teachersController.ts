import { Request, Response } from "express";
import { Teacher } from "../models/teacherModel";

class TeachersController {
  async consultTeachers(req: Request, res: Response) {
    try {
      const data = await Teacher.find();
      res.json(data);
    } catch (err) {
      if (err instanceof Error) {
        res
          .status(500)
          .json({ error: "Error interno del servidor", detalle: err.message });
      }
    }
  }

  async consultTeacherById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const register = await Teacher.findOneBy({ id: Number(id) });
      if (!register) {
        return res.status(404).json({ error: "Profesor no encontrado" });
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

  async createTeacher(req: Request, res: Response) {
    try {
      const register = await Teacher.save(req.body);
      res.status(201).json(register);
    } catch (err) {
      if (err instanceof Error) {
        res
          .status(500)
          .json({ error: "Error interno del servidor", detalle: err.message });
      }
    }
  }

  async updateTeacher(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const register = await Teacher.findOneBy({ id: Number(id) });
      if (!register) {
        return res.status(404).json({ error: "Profesor no encontrado" });
      }

      await Teacher.update({ id: Number(id) }, req.body);
      const registerUpdate = await Teacher.findOneBy({ id: Number(id) });
      res.json(registerUpdate);
    } catch (err) {
      if (err instanceof Error) {
        res
          .status(500)
          .json({ error: "Error interno del servidor", detalle: err.message });
      }
    }
  }

  async deleteTeacher(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const register = await Teacher.findOneBy({ id: Number(id) });
      if (!register) {
        return res.status(404).json({ error: "Profesor no encontrado" });
      }

      await Teacher.delete({ id: Number(id) });
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

export default new TeachersController();
