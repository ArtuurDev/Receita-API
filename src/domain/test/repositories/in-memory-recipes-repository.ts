import { RecipeRepository } from "src/domain/recipe/application/repositories/recipe-repository";
import { Recipe } from "src/domain/recipe/enterprise/entities/recipe";

export class InMemoryRecipesRepository implements RecipeRepository {

    public items: Recipe[] = []

    async create(recipe: Recipe): Promise<Recipe> {
        this.items.push(recipe)
        return recipe
    }
    async getRecipeById(id: string): Promise<Recipe | null> {
        const recipe =  this.items.find(item => item.props.id.value === id)
        
        if(!recipe) {
            return null
        }

        return recipe
    }
    async listAllRecipes(): Promise<Recipe[]> {
       return this.items
    }

}