import { DataSource } from "typeorm";
import { Student } from "../models/studentModel";
import { Teacher } from "../models/teacherModel";
import { Course } from "../models/courseModel";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "cursos2",
  logging: true,
  entities: [Student, Teacher, Course],
  synchronize:true
});
