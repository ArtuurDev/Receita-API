import { Either, right} from "src/core/either"
import { Recipe } from "../../enterprise/entities/recipe"
import { RecipeRepository } from "../repositories/recipe-repository"
import { Injectable } from "@nestjs/common"

export interface CreateRecipeUseCaseRequest {
    title: string
    description: string
    ingredients: string[]
    createdAt?: Date
    updatedAt?: Date
}

export type CreateRecipeUseCaseResponse = Either<null, Recipe>

@Injectable()
export class CreateRecipeUseCase {
    constructor(private recipeRepository: RecipeRepository) {

    }

    async execute({
        description,
        ingredients,
        title,
        createdAt,
        updatedAt
    }: CreateRecipeUseCaseRequest): Promise<CreateRecipeUseCaseResponse> {

        const recipe = Recipe.create({
            description,
            ingredients,
            title,
            createdAt,
            updatedAt
        })

        await this.recipeRepository.create(recipe)

        return right(recipe)
    }

}