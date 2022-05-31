/////////////////////////////////////
// DO NOT EDIT THIS FILE DIRECTLY,
// THIS FILE WAS AUTO GENERATED.
/////////////////////////////////////

import { ObjectType, Field, ID } from "@nestjs/graphql";

import { NoDefaultInt as PrismaNoDefaultInt } from "@prisma/client";

export { PrismaNoDefaultInt };

export type NoDefaultIntConstructor = {
  id: number;
};

@ObjectType({ isAbstract: true })
export class BaseNoDefaultInt implements PrismaNoDefaultInt {
  @Field(() => ID, { nullable: false })
  readonly id: number;

  constructor(model: NoDefaultIntConstructor) {
    this.id = model.id;
  }

  static fromPrisma(hash: PrismaNoDefaultInt): BaseNoDefaultInt {
    return new BaseNoDefaultInt(hash);
  }

  toPrisma(): PrismaNoDefaultInt {
    const { ...entity } = this;
    return entity;
  }
}
