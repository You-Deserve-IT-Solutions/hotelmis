import { User } from 'src/database/entities';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Generated,
  JoinColumn,
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

  @OneToOne((type) => User)
  @JoinColumn()
  user: User;

  @Column({ name: 'created_by', type: 'int', default: 1 })
  createdBy: number;

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
