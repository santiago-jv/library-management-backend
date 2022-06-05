import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('books')
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:'varchar', name:'name'})
    name: string;

    @Column({type:'varchar', name:'description'})
    description: string;

    @Column({type:'varchar', name:'author'})
    author: string;

    @Column({type:'int', name:'userId'})
    userId: number;

    @CreateDateColumn({type:'timestamp', name:'created_at'})
    createdAt: string;
}