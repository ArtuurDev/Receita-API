import { it } from "vitest";
import { InMemoryRecipesRepository } from "../repositories/in-memory-recipes-repository";
import { ListAllRecipeByIdUseCase } from "src/domain/recipe/application/use-cases/list-all-recipes";
import { makeRecipe } from "../factories/make-recipe";

it('deve ser possivel listar todas as receitas', async () => {
    const inMemoryRecipesRepository = new InMemoryRecipesRepository()
    const listAllRecipes = new ListAllRecipeByIdUseCase(inMemoryRecipesRepository)

    for(let i=0; i < 3; i++) {
        inMemoryRecipesRepository.items.push(makeRecipe())
    }

    const result = await listAllRecipes.execute()

    expect(result.value).toHaveLength(3)


})