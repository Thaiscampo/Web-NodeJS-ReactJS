// Thais Campo Fiorelli Ra: N617098
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Tasks{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({
        default: false

    })
    finished: boolean;

    @CreateDateColumn()
    creat_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
