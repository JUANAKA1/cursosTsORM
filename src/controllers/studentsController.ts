import { Request, Response } from "express";

class StudentsController {

    
  consultStudents(req: Request, res: Response) {
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

  consultStudentById(req: Request, res: Response) {
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

  createStudent(req: Request, res: Response) {
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

  updateStudent(req: Request, res: Response) {
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


  deleteStudent(req: Request, res: Response) {
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
export default new StudentsController();
