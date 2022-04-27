/////////////////////////////////////
// DO NOT EDIT THIS FILE DIRECTLY,
// THIS FILE WAS AUTO GENERATED.
/////////////////////////////////////

import { Field, InputType, ID } from "@nestjs/graphql";

import { EmailConfirmationTokenConstructor } from "./EmailConfirmationToken.model";
import { PaginatorInputs } from "./paginator";

@InputType()
export class EmailConfirmationTokenCreateInput
  implements EmailConfirmationTokenConstructor
{
  @Field(() => ID, { nullable: true })
  id?: string;

  @Field(() => Date!, { nullable: false })
  expiresAt!: Date;

  @Field(() => String!, { nullable: false })
  userId!: string;
}

@InputType()
export class EmailConfirmationTokenUpdateInput {
  @Field(() => ID!, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: true })
  expiresAt?: Date;
}

@InputType()
export class EmailConfirmationTokenPaginatorInput extends PaginatorInputs {}
