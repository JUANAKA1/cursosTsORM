import { Request, Response } from "express";


class CoursesController {
  consultCourses(req: Request, res: Response) {
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

  consultCourseById(req: Request, res: Response) {
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

  createCourse(req: Request, res: Response) {
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

  updateCourse(req: Request, res: Response) {
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


  deleteCourse(req: Request, res: Response) {
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

  associatedCoursesStudent(req: Request, res: Response) {
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

export default new CoursesController();
