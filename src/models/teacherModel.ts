import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Course } from "./courseModel";

@Entity()
export class Teacher extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  dni!: string;

  @Column()
  nombre!: string;

  @Column()
  apellido!: string;

  @Column()
  email!: string;

  @Column()
  profesion!: string;

  @Column()
  telefono!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @OneToMany(() => Course, (course) => course.teacher)
  courses!: Course[];
}
