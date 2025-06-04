import { Entity } from "src/core/entity";
import { UniqueEntityId } from "../value-objects/unique-entity-id";
import { Optional } from "src/core/optional";

export interface RecipeProps {
    id: UniqueEntityId
    title: string
    description: string
    ingredients: string[]
    createdAt: Date
    updatedAt?: Date | null
}

export class Recipe extends Entity<RecipeProps> {
    private constructor(props: RecipeProps) {
        super(props)
    }

    static create(props: Optional<RecipeProps, 'id' | 'createdAt'>) {
        return new Recipe({
            ...props,
            id: props.id ?? new UniqueEntityId(),
            createdAt: props.createdAt ?? new Date(),
            updatedAt: props.updatedAt ?? null
        }) 
    }

    get title() {
        return this.props.title
    }

    get description() {
        return this.props.description;
    }

    get ingredients() {
        return this.props.ingredients;
    }

    get createdAt() {
        return this.props.createdAt;
    }

    get updatedAt() {
        return this.props.updatedAt;
    }

    get id() {
        return this.props.id
    }


}