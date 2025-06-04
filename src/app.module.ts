import { Module } from '@nestjs/common';
import { RecipeModule } from './infra/recipes/recipes.module';


@Module({
  imports: [RecipeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
