import { describe, it } from "vitest";
import { InMemoryRecipesRepository } from "../repositories/in-memory-recipes-repository";
import { GetRecipeByIdUseCase } from "src/domain/recipe/application/use-cases/get-recipe-by-id";
import { makeRecipe } from "../factories/make-recipe";
import { IdNotExists } from "src/domain/recipe/errors/id-not-exists";

describe('Testes referentes a listagem de uma unica receita', () => {
    let inMemoryRecipesRepository: InMemoryRecipesRepository
    let sut: GetRecipeByIdUseCase
    beforeEach(() => {
        inMemoryRecipesRepository = new InMemoryRecipesRepository()
        sut = new GetRecipeByIdUseCase(inMemoryRecipesRepository)
    })

    it('deve ser possivel listar uma unica receita', async () => {
        const recipe = makeRecipe()
        inMemoryRecipesRepository.items.push(recipe)
        const result = await sut.execute({
            id: recipe.props.id.value
        })
        expect(result.isRight()).toBe(true)
        expect(result.value).toEqual(recipe)
    })

    it('Não deve ser possivel listar uma receita de id inexistente', async () => {
        const result = await sut.execute({
            id: 'inexistente'
        })
        expect(result.isLeft()).toBe(true)
        expect(result.value).toEqual(new IdNotExists())
    })

})