import { Recipe } from "src/domain/recipe/enterprise/entities/recipe";
import { UniqueEntityId } from "src/domain/recipe/enterprise/value-objects/unique-entity-id";

export function makeRecipe(override?: Partial<Recipe>) {

    return Recipe.create({
        description: 'Incrível receita de bolo para o fim de semana',
        id: new UniqueEntityId(),
        ingredients: ['ovo', 'farinha', 'açucar'],
        title: 'Receita de bolo',
        createdAt: new Date(),
        updatedAt: null,
        ...override
    })

}