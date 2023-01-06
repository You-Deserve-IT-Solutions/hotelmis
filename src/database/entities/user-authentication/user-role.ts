import { HMISBaseEntity } from 'src/core/entities/base-entity';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class userRole extends HMISBaseEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'role_id',
  })
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;
}
