import { HMISDataBaseEntity } from 'src/core/entities/data-base-entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Person } from '../person/person';

@Entity()
export class Users extends HMISDataBaseEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'user_id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
    unique: true,
  })
  username: string;

  @Column({
    name: 'email',
    nullable: false,
    default: '',
    unique: true,
  })
  email: string;

  @Column({
    nullable: false,
    default: '',
  })
  password: string;

  @OneToOne((type) => Person)
  @JoinColumn({ name: 'person_id', referencedColumnName: 'id' })
  person: Person;
}
