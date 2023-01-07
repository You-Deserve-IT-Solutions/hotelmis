import { Person } from 'src/database/entities';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Generated,
  JoinColumn,
  ManyToOne,
  UpdateDateColumn,
} from 'typeorm';

export class HMISMetadataBaseEntity extends BaseEntity {
  @CreateDateColumn({
    name: 'created_date',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createDateTime: Date;

  @ManyToOne((type) => Person)
  @JoinColumn({ name: 'created_by', referencedColumnName: 'id' })
  createdBy: Person;

  @UpdateDateColumn({
    name: 'last_updated_date',
    type: 'timestamptz',
    nullable: true,
  })
  lastChangedDateTime: Date;

  @ManyToOne((type) => Person)
  @JoinColumn({ name: 'last_updated_by', referencedColumnName: 'id' })
  lastChangedBy: Person;

  @Column()
  @Generated('uuid')
  uuid: string;

  @Column({ nullable: true, default: false })
  retired: boolean;

  @Column({
    name: 'retired_date',
    type: 'timestamptz',
    nullable: true,
  })
  retiredDate: Date;

  @ManyToOne((type) => Person)
  @JoinColumn({ name: 'retired_by', referencedColumnName: 'id' })
  retiredBy: Person;

  @Column({ nullable: true, name: 'retire_reason' })
  retireReason: string;
}
