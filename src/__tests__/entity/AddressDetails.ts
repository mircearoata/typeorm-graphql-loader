import { Field, ObjectType } from "type-graphql";
import { Column } from "typeorm";

@ObjectType()
export class AddressDetails {
  @Field()
  @Column()
  county!: string;
}