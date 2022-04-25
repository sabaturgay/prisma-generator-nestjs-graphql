/////////////////////////////////////
// DO NOT EDIT THIS FILE DIRECTLY,
// THIS FILE WAS AUTO GENERATED.
/////////////////////////////////////

import { v4 } from "uuid";

import { ObjectType, Field, ID } from "@nestjs/graphql";

import { EmailConfirmationToken as PrismaEmailConfirmationToken } from "../client";

import { BaseUser } from "./User.model";

export type EmailConfirmationTokenConstructor = {
  id?: string | null;
  expiresAt: Date;
  createdAt?: Date | null;
  userId: string;
  user?: BaseUser | null;
};

@ObjectType({ isAbstract: true })
export class BaseEmailConfirmationToken
  implements PrismaEmailConfirmationToken
{
  @Field(() => ID, { nullable: false })
  readonly id: string;

  @Field(() => Date!, { nullable: false })
  expiresAt: Date;

  @Field(() => Date!, { nullable: false })
  createdAt: Date;

  @Field(() => String!, { nullable: false })
  readonly userId: string;

  @Field(() => BaseUser, { nullable: true })
  user: null | BaseUser;

  constructor(model: EmailConfirmationTokenConstructor) {
    this.id = model.id ?? v4();
    this.expiresAt = model.expiresAt;
    this.createdAt = model.createdAt ?? new Date();
    this.userId = model.userId;
    this.user = model.user ?? null;
  }

  static fromHash(
    hash: PrismaEmailConfirmationToken
  ): BaseEmailConfirmationToken {
    return new BaseEmailConfirmationToken(hash);
  }

  toHash(): PrismaEmailConfirmationToken {
    const { user, ...entity } = this;
    return entity;
  }
}
