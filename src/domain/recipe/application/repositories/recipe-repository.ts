import { Recipe } from "../../enterprise/entities/recipe";

export abstract class RecipeRepository {
    abstract create(recipe: Recipe): Promise<Recipe>
    abstract getRecipeById(id: string): Promise<Recipe | null>
    abstract listAllRecipes(): Promise<Recipe[]>
}