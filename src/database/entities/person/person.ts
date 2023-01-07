import { HMISDataBaseEntity } from 'src/core/entities/data-base-entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Person extends HMISDataBaseEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
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
