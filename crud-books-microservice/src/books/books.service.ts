import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateBookDTO, UpdateBookDTO } from './book.dto';
import { Book } from './book.entity';

@Injectable()
export class BooksService {

    constructor(@InjectRepository(Book) private _bookRepository: Repository<Book>){}

    create(bookData: CreateBookDTO):Promise<Book> {
        const newBook:Book = this._bookRepository.create(bookData)
        return this._bookRepository.save(newBook)
    }
    getAll(userId:number):Promise<Book[]> {
        return this._bookRepository.find({
            where:{
                userId
            }
        })
    }
    async update(id:number,bookData: UpdateBookDTO):Promise<Book> {
        const book:Book = await this._bookRepository.findOne(id);
         this._bookRepository.merge(book, bookData);
        return this._bookRepository.save(book);
    }
    delete(id:number):Promise<DeleteResult> {
        return this._bookRepository.delete(id);
    }
}
