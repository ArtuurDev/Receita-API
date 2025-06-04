import { Controller, Get, InternalServerErrorException, Param, Res } from "@nestjs/common";
import { Response } from "express";
import { GetRecipeByIdUseCase } from "src/domain/recipe/application/use-cases/get-recipe-by-id";
import { IdNotExists } from "src/domain/recipe/errors/id-not-exists";
import { toHttp } from "./presenters/recipe-presenter";

@Controller()
export class GetRecipeByIdController {
    constructor(private getRecipeById: GetRecipeByIdUseCase) {

    }

    @Get('recipe/:id')
    async handle(@Param('id') id: string, @Res() res: Response) {

        try {
            const {value} = await this.getRecipeById.execute({
                id
            })

            if(value instanceof IdNotExists) {
                return res.status(value.code).json(value.toJson())
            }

            return res.status(201).json(toHttp(value))

        } catch(err) {
            throw new InternalServerErrorException()
        }

    }

}