import { Either, right } from "src/core/either"
import { Recipe } from "../../enterprise/entities/recipe"
import { RecipeRepository } from "../repositories/recipe-repository"
import { Injectable } from "@nestjs/common"

export type ListAllRecipeUseCaseResponse = Either<any, Recipe[]>

@Injectable()
export class ListAllRecipeByIdUseCase {
    constructor(private recipeRepository: RecipeRepository) {}

    async execute(): Promise<ListAllRecipeUseCaseResponse> {
        const recipe = await this.recipeRepository.listAllRecipes()
        return right(recipe)
    }

}