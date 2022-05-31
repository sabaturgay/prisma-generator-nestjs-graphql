/////////////////////////////////////
// DO NOT EDIT THIS FILE DIRECTLY,
// THIS FILE WAS AUTO GENERATED.
/////////////////////////////////////

import { ObjectType, Field, ID } from "@nestjs/graphql";

import { NoDefaultUUID as PrismaNoDefaultUUID } from "@prisma/client";

export type NoDefaultUUIDConstructor = {
  id: string;
};

@ObjectType({ isAbstract: true })
export class BaseNoDefaultUUID implements PrismaNoDefaultUUID {
  @Field(() => ID, { nullable: false })
  readonly id: string;

  constructor(model: NoDefaultUUIDConstructor) {
    this.id = model.id;
  }

  static fromHash(hash: PrismaNoDefaultUUID): BaseNoDefaultUUID {
    return new BaseNoDefaultUUID(hash);
  }

  toHash(): PrismaNoDefaultUUID {
    const { ...entity } = this;
    return entity;
  }
}