import { Request, Response } from "express";

class TeachersController {
  constructor() {}
    
  consultTeachers(req: Request, res: Response) {
    try {
      res.send("consultar");
    } catch (err) {
      if (err instanceof Error) {
        res
          .status(500)
          .json({ error: "Error interno del servidor", detalle: err.message });
      }
    }
  }

  consultTeacherById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      res.send("consultar");
    } catch (err) {
      if (err instanceof Error) {
        res
          .status(500)
          .json({ error: "Error interno del servidor", detalle: err.message });
      }
    }
  }

  createTeacher(req: Request, res: Response) {
    try {
      res.send("consultar");
    } catch (err) {
      if (err instanceof Error) {
        res
          .status(500)
          .json({ error: "Error interno del servidor", detalle: err.message });
      }
    }
  }

  updateTeacher(req: Request, res: Response) {
    const { id } = req.params;

    try {
      res.send("consultar");
    } catch (err) {
      if (err instanceof Error) {
        res
          .status(500)
          .json({ error: "Error interno del servidor", detalle: err.message });
      }
    }
  }


  deleteTeacher(req: Request, res: Response) {
    const { id } = req.params;

    try {
      res.send("consultar");
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
