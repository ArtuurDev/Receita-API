import { Injectable } from "@nestjs/common";
import { RecipeRepository } from "src/domain/recipe/application/repositories/recipe-repository";
import { PrismaService } from "../config/prisma.service";
import { Recipe } from "src/domain/recipe/enterprise/entities/recipe";
import { RecipeMappers } from "../mappers/recipe-mappers";

@Injectable()
export class PrismaRecipeRepository implements RecipeRepository {
    constructor(private prisma: PrismaService) {
        
    }
    
    async create(recipe: Recipe): Promise<Recipe> {
        
        const data = RecipeMappers.ToPrisma(recipe)
       
        const recipeCreated = await this.prisma.recipe.create({
            data
        })

        return RecipeMappers.toDomain(recipeCreated)
    }
    
    
    async getRecipeById(id: string): Promise<Recipe | null> {
        
        const recipe = await this.prisma.recipe.findUnique({
            where: {id}
        })

        if(!recipe) {
            return null
        } 

        return RecipeMappers.toDomain(recipe)
    }

    async listAllRecipes(): Promise<Recipe[]> {
        const recipes = await this.prisma.recipe.findMany()
        return recipes.map(RecipeMappers.toDomain)
    }
}