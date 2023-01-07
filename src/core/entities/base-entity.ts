import { Users } from 'src/database/entities';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Generated,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class HMISBaseEntity extends BaseEntity {
  @CreateDateColumn({
    name: 'created_date',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createDateTime: Date;

  @ManyToOne((type) => Users)
  @JoinColumn({ name: 'created_by', referencedColumnName: 'id' })
  createdBy: Users;

  @UpdateDateColumn({
    name: 'last_updated_date',
    type: 'timestamptz',
    nullable: true,
  })
  lastChangedDateTime: Date;

  @Column({ name: 'last_updated_by', nullable: true, type: 'int' })
  lastChangedBy: number;

  @Column()
  @Generated('uuid')
  uuid: string;
}
