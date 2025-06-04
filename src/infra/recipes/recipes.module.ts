import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { CreateRecipesController } from "./controllers/create-recipes.controller";
import { CreateRecipeUseCase } from "src/domain/recipe/application/use-cases/create-recipe";
import { RecipeRepository } from "src/domain/recipe/application/repositories/recipe-repository";
import { PrismaRecipeRepository } from "../database/prisma/repositories/prisma-recipes-repository";
import { ListAllRecipeByIdUseCase } from "src/domain/recipe/application/use-cases/list-all-recipes";
import { GetRecipeByIdUseCase } from "src/domain/recipe/application/use-cases/get-recipe-by-id";
import { GetRecipeByIdController } from "./controllers/get-recipe-by-id.controller";
import { ListAllRecipeByIdController } from "./controllers/list-all-by-id.controller";

@Module({
    imports: [DatabaseModule],
    controllers: [
        CreateRecipesController,
        GetRecipeByIdController,
        ListAllRecipeByIdController
    ],
    providers: [
        CreateRecipeUseCase,
        ListAllRecipeByIdUseCase,
        GetRecipeByIdUseCase, 
        {
            provide: RecipeRepository,
            useClass: PrismaRecipeRepository
        }
    ]
})
export class RecipeModule {}