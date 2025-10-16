import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  JoinTable,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Teacher } from "./teacherModel";
import { Student } from "./studentModel";

@Entity()
export class Course extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column("text")
  descripcion!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  // ✅ Relación correcta con Teacher
  @ManyToOne(() => Teacher, (teacher) => teacher.courses)
  @JoinColumn({ name: "teacher_id" })
  teacher!: Teacher;

  // ✅ Relación con Student (Muchos a Muchos)
  @ManyToMany(() => Student)
  @JoinTable({
    name: "courses_students",
    joinColumn: { name: "course_id" },
    inverseJoinColumn: { name: "student_id" },
  })
  students!: Student[];
}
