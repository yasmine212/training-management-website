import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Formation } from 'src/formations/formation.entity';

@ObjectType()
@Entity()
export class Client {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  telephone: string;

  @Field()
  @Column()
  niveauEtude: string;

  @Field()
  @Column()
  dateNaissance: string;

  @Field()
  @Column()
  modeFormation: string;

  @Field(() => Formation)
  @ManyToOne(() => Formation, (formation) => formation.clients)
  formation: Formation;
}
