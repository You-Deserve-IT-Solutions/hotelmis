import { HMISDataBaseEntity } from 'src/core/entities/data-base-entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from '../user-authentication/user';

@Entity()
export class Person extends HMISDataBaseEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'person_id',
  })
  id: number;

  @Column()
  firstName: string;

  @Column()
  middleName: string;

  @Column()
  lastName: string;

  @Column()
  gender: string;

  @Column({ nullable: true })
  country: number;
}
