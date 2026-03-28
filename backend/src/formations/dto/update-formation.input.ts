import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateFormationInput } from './create-formation.input';

@InputType()
export class UpdateFormationInput extends PartialType(CreateFormationInput) {}
