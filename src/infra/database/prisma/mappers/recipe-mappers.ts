import { Prisma, Recipe as RecipePrisma} from "@prisma/client";
import { Recipe as RecipeDomain } from "src/domain/recipe/enterprise/entities/recipe";
import { UniqueEntityId } from "src/domain/recipe/enterprise/value-objects/unique-entity-id";

export class RecipeMappers {

    static toDomain(recipe: RecipePrisma): RecipeDomain {

        return RecipeDomain.create({
            id: new UniqueEntityId(recipe.id),
            title: recipe.title,
            description: recipe.description,
            ingredients: recipe.ingredients,
            createdAt: recipe.createdAt,
            updatedAt: recipe.updatedAt
        })

    }


    static ToPrisma(recipe: RecipeDomain): Prisma.RecipeCreateInput {
        return {
            title: recipe.title,
            description: recipe.description,
            createdAt: recipe.createdAt,
            id: recipe.id.value,
            ingredients: recipe.ingredients
        }
    }

}