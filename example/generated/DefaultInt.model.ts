/////////////////////////////////////
// DO NOT EDIT THIS FILE DIRECTLY,
// THIS FILE WAS AUTO GENERATED.
/////////////////////////////////////

import { ObjectType, Field, ID } from "@nestjs/graphql";

import { DefaultInt as PrismaDefaultInt } from "@prisma/client";

export type DefaultIntConstructor = {
  id?: number | null;
};

@ObjectType({ isAbstract: true })
export class BaseDefaultInt implements PrismaDefaultInt {
  @Field(() => ID, { nullable: false })
  readonly id: number;

  constructor(model: DefaultIntConstructor) {
    this.id = model.id!;
  }

  static fromHash(hash: PrismaDefaultInt): BaseDefaultInt {
    return new BaseDefaultInt(hash);
  }

  toHash(): PrismaDefaultInt {
    const { ...entity } = this;
    return entity;
  }
}
