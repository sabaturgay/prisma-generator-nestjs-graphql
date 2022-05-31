/////////////////////////////////////
// DO NOT EDIT THIS FILE DIRECTLY,
// THIS FILE WAS AUTO GENERATED.
/////////////////////////////////////

import { v4 } from "uuid";

import { ObjectType, Field, ID } from "@nestjs/graphql";

import { ForgotPasswordToken as PrismaForgotPasswordToken } from "@prisma/client";
import { BaseUser } from "./User.model";

export { PrismaForgotPasswordToken };

export type ForgotPasswordTokenConstructor = {
  id?: string | null;
  expiresAt: Date;
  createdAt?: Date | null;
  userId: string;
  user?: BaseUser | null;
};

@ObjectType({ isAbstract: true })
export class BaseForgotPasswordToken implements PrismaForgotPasswordToken {
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

  constructor(model: ForgotPasswordTokenConstructor) {
    this.id = model.id ?? v4();
    this.expiresAt = model.expiresAt;
    this.createdAt = model.createdAt ?? new Date();
    this.userId = model.userId;
    this.user = model.user ?? null;
  }

  static fromPrisma(hash: PrismaForgotPasswordToken): BaseForgotPasswordToken {
    return new BaseForgotPasswordToken(hash);
  }

  toPrisma(): PrismaForgotPasswordToken {
    const { user, ...entity } = this;
    return entity;
  }
}
