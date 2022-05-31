/////////////////////////////////////
// DO NOT EDIT THIS FILE DIRECTLY,
// THIS FILE WAS AUTO GENERATED.
/////////////////////////////////////

import { Field, InputType, ID } from "@nestjs/graphql";

import { RoleConstructor } from "./Role.model";
import { PaginatorInputs } from "./paginator";

@InputType()
export class RoleCreateInput implements RoleConstructor {
  @Field(() => ID, { nullable: true })
  id?: number;

  @Field(() => String!, { nullable: false })
  name!: string;
}

@InputType()
export class RoleUpdateInput {
  @Field(() => ID!, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: true })
  name?: string;
}

@InputType()
export class RoleWhereInput {
  @Field(() => ID, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: true })
  name?: string;
}

@InputType()
export class RolePaginatorInput extends PaginatorInputs {}
