import { HMISDataBaseEntity } from 'src/core/entities/data-base-entity';
import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Person } from '../person/person';

@Entity()
export class Client extends HMISDataBaseEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'client_id',
  })
  id: number;

  @OneToOne((type) => Person)
  @JoinColumn({ name: 'person_id', referencedColumnName: 'id' })
  person: Person;
}
