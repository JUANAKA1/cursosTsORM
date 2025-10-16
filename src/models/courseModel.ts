import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Teacher } from "./teacherModel";
import { Student } from "./studentModel";

@Entity()
export class Course extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nombre: string;
  @Column("text")
  descripcion: string;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Teacher, (teacher) => teacher.courses)
  @JoinColumn({ name: "teacher_id" })
  teacher: Teacher;

  @ManyToMany(() => Student)
  @JoinTable({
    name: "courses_students",
    joinColumn: { name: "course_id" },
    inverseJoinColumn: { name: "student_id" },
  })
  students: Student[];
}
