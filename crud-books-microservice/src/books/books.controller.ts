import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { Response } from 'express'
import { StatusCodes } from 'http-status-codes';
import { CreateBookDTO, UpdateBookDTO } from './book.dto';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
    constructor(private readonly _bookService: BooksService,) { }
    @Get("/:userId")
    async getAll(@Res() response: Response, @Param() params) {
        try {
            const books= await this._bookService.getAll(params.userId)

            return response.status(StatusCodes.OK).json(books)
        } catch (error) {
            return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: error.message
            })
        }
    }
    @Post()
    async create(@Res() response: Response, @Body() bookData: CreateBookDTO) {


        try {
            const book = await this._bookService.create(bookData)

            return response.status(StatusCodes.CREATED).json(book)
        } catch (error) {
            return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: error.message
            })
        }
    }

    @Put("/:id")
    async update(@Param('id') id: number, @Res() response: Response, @Body() bookData: UpdateBookDTO) {

        try {
            const book = await this._bookService.update(id,bookData)

            return response.status(StatusCodes.OK).json(book)
        } catch (error) {
            return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: error.message
            })
        }
    }
    @Delete('/:id')
    async delete(@Param('id') id: number, @Res() response: Response) {

        try {
            await this._bookService.delete(id)
            return response.status(StatusCodes.OK).json({
                message: 'Book deleted',
                id
            })
            
        } catch (error) {
            return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: error.message
            })
        }
    }

}
