import { HMISMetadataBaseEntity } from 'src/core/entities/metadata-base-entity';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class userRole extends HMISMetadataBaseEntity {
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
