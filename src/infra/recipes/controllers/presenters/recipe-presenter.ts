import { Recipe } from "src/domain/recipe/enterprise/entities/recipe";

export function toHttp(recipe: Recipe) {
    return {
        id: recipe.id.value,
        title: recipe.title,
        ingredients: recipe.ingredients,
        createdAt: recipe.createdAt
    }
}