import { HMISDataBaseEntity } from 'src/core/entities/data-base-entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Client } from '../client/client';
import { Person } from '../person/person';
import { Users } from '../user-authentication/user';
import { Attribute } from './attribute';

@Entity()
export class AttributeValue extends HMISDataBaseEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'attribute_value_id',
  })
  id: number;

  @Column()
  value: string;

  @Column()
  description: string;

  @Column()
  category: string;

  @ManyToOne((type) => Attribute)
  @JoinColumn({ name: 'attribute_id', referencedColumnName: 'id' })
  attribute: Attribute;

  @ManyToOne((type) => Person)
  @JoinColumn({ name: 'person_id', referencedColumnName: 'id' })
  person: Person;

  @ManyToOne((type) => Users)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: Users;

  @ManyToOne((type) => Client)
  @JoinColumn({ name: 'client_id', referencedColumnName: 'id' })
  client: Client;
}
