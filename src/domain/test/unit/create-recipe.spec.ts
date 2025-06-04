import { InMemoryRecipesRepository } from 'src/domain/test/repositories/in-memory-recipes-repository'
import {describe, it} from 'vitest' 
import { CreateRecipeUseCase } from '../../recipe/application/use-cases/create-recipe'

describe('testes referentes a criação de uma receita', () => {
    let inMemoryRecipesRepository: InMemoryRecipesRepository
    let sut: CreateRecipeUseCase
    beforeEach(() => {
        inMemoryRecipesRepository = new InMemoryRecipesRepository()
        sut = new CreateRecipeUseCase(inMemoryRecipesRepository)
    })

    it("deve ser possivel criar uma receita", async () => {

        const result = await sut.execute({
            description: 'nova descrição',
            ingredients: ['ovo', 'açucar'],
            title: 'receita de bolo'
        })

        expect(result.isRight()).toBe(true)
        expect(result.value?.props.id.value).toEqual(expect.any(String))
        expect(inMemoryRecipesRepository.items).toHaveLength(1)

    })

})