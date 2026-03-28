import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Client } from '../clients/client.entity';

@ObjectType()
@Entity()
export class Formation {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  cover: string;

  @Field()
  @Column()
  hoverCover: string;

  @Field()
  @Column()
  backgroundImage: string;

  @Field()
  @Column()
  courseName: string;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column()
  duration: string;

  @Field(() => Float)
  @Column({ type: 'float' })
  price: number;

  @Field()
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @Field({ nullable: true })
  @Column({ name: 'formateurnom', nullable: true })
  formateurNom?: string;

  @Field({ nullable: true })
  @Column({ name: 'formateurprenom', nullable: true })
  formateurPrenom?: string;

  @Field({ nullable: true })
  @Column({ name: 'formateuremail', nullable: true })
  formateurEmail?: string;

  @Field({ nullable: true })
  @Column({ name: 'formateurspecialite', nullable: true })
  formateurSpecialite?: string;

  // Relation with Client
  @Field(() => [Client], { nullable: true })
  @OneToMany(() => Client, (client) => client.formation)
  clients?: Client[];
}



