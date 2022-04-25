/////////////////////////////////////
// DO NOT EDIT THIS FILE DIRECTLY,
// THIS FILE WAS AUTO GENERATED.
/////////////////////////////////////

import { Field, InputType, ID, Int } from "@nestjs/graphql";

import { IsEmail, IsDate, MaxDate, IsIP } from "class-validator";
import { UserConstructor } from "./User.model";
import { PaginatorInputs } from "./paginator";

@InputType()
export class UserCreateInput implements UserConstructor {
  @Field(() => ID, { nullable: false })
  id!: string;

  @IsEmail()
  @Field(() => String!, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: true })
  passwordHash?: string;

  @Field(() => Int!, { nullable: false })
  tokenVersion!: number;

  @Field(() => Boolean!, { nullable: false })
  isEmailConfirmed!: boolean;

  @Field(() => String, { nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  lastName?: string;

  @IsDate()
  @MaxDate(new Date())
  @Field(() => Date, { nullable: true })
  lastHeartbeatAt?: Date;

  @IsDate()
  @MaxDate(new Date())
  @Field(() => Date, { nullable: true })
  lastLoginAt?: Date;

  @IsIP()
  @Field(() => String, { nullable: true })
  lastLoginIP?: string;

  @IsIP()
  @Field(() => String!, { nullable: false })
  createdIP!: string;
}

@InputType()
export class UserUpdateInput {
  @Field(() => ID!, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => Boolean, { nullable: true })
  isEmailConfirmed?: boolean;

  @Field(() => String, { nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  lastName?: string;

  @Field(() => Date, { nullable: true })
  lastHeartbeatAt?: Date;

  @Field(() => Date, { nullable: true })
  lastLoginAt?: Date;

  @Field(() => String, { nullable: true })
  lastLoginIP?: string;
}

@InputType()
export class UserPaginatorInput extends PaginatorInputs {}