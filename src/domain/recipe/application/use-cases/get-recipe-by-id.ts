import { Either, left, right } from "src/core/either"
import { IdNotExists } from "../../errors/id-not-exists"
import { Recipe } from "../../enterprise/entities/recipe"
import { RecipeRepository } from "../repositories/recipe-repository"
import { Injectable } from "@nestjs/common"

export interface GetRecipeByIdUseCaseRequest {
    id: string
}

export type GetRecipeByIdUseCaseResponse = Either<IdNotExists, Recipe>

@Injectable()
export class GetRecipeByIdUseCase {
    constructor(private recipeRepository: RecipeRepository) {}

    async execute({ id }: GetRecipeByIdUseCaseRequest): Promise<GetRecipeByIdUseCaseResponse> {

        const recipe = await this.recipeRepository.getRecipeById(id)
        if(!recipe) {
            return left(new IdNotExists())
        }

        return right(recipe)

    }

}