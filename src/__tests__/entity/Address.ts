import { Column, JoinColumn, JoinTable, ManyToOne, OneToOne } from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { ConfigureLoader } from "../../ConfigureLoader";
import { AddressDetails } from "./AddressDetails";
import { AddressRelation } from "./AddressRelation";

@ObjectType()
export class Address {
  @Field()
  @Column()
  street!: string;

  @Column()
  @ConfigureLoader({ graphQLName: "unitNumber" })
  street2!: string;

  @Field()
  @Column()
  city!: string;

  @Field()
  @Column()
  state!: string;

  // testing custom column names
  @Field()
  @Column({ name: "postCode" })
  zip!: string;

  @Field(() => AddressDetails)
  @Column(() => AddressDetails)
  details!: AddressDetails;

  @Field(() => AddressRelation)
  @ManyToOne(() => AddressRelation)
  relation!: AddressRelation;
}
