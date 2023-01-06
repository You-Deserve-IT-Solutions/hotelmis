import { HMISBaseEntity } from 'src/core/entities/base-entity';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class userProfile extends HMISBaseEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'user_id',
  })
  id: number;

  @Column()
  firstName: string;

  @Column()
  middleName: string;

  @Column()
  lastName: string;

  @Column()
  country: number;
}
