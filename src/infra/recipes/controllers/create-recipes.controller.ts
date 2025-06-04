import { Body, Controller, InternalServerErrorException, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { CreateRecipeUseCase } from "src/domain/recipe/application/use-cases/create-recipe";
import { z } from "zod";
import { ZodValidationPipe } from "./pipes/zod-validation-pipe";

export const request = z.object({
    title: z.string(),
    description: z.string(),
    ingredients: z.string().array(),
    createdAt: z.string().datetime().optional()
})

export type requestSchema = z.infer<typeof request>

@Controller()
export class CreateRecipesController {
    constructor(private createRecipeUseCase: CreateRecipeUseCase) {}

    @Post('recipe')
    async handle(@Body(new ZodValidationPipe(request)) body: requestSchema, @Res() res: Response) {

        const { description, ingredients, title } = body

        try {
            const result = await this.createRecipeUseCase.execute({
                description,
                ingredients,
                title
            })

            return res.status(201).json({
                message: 'success',
                recipe: result.value
            })

        } catch(err) {
            throw new InternalServerErrorException()
        }

    }
}