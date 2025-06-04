import { Controller, Get, InternalServerErrorException, Param, Res } from "@nestjs/common";
import { Response } from "express";
import { ListAllRecipeByIdUseCase } from "src/domain/recipe/application/use-cases/list-all-recipes";
import { toHttp } from "./presenters/recipe-presenter";

@Controller()
export class ListAllRecipeByIdController {
    constructor(private listAllRecipeById: ListAllRecipeByIdUseCase) {

    }

    @Get('recipe')
    async handle(@Res() res: Response) {

        try {
            const {value} = await this.listAllRecipeById.execute()

            return res.status(201).json(value.map(toHttp))

        } catch(err) {
            throw new InternalServerErrorException()
        }

    }

}