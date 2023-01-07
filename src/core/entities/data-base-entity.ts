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

export class HMISDataBaseEntity extends BaseEntity {
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

  @Column({ name: 'last_updated_by', nullable: true, type: 'int' })
  lastChangedBy: number;

  @Column()
  @Generated('uuid')
  uuid: string;

  @Column({ nullable: true, default: false })
  voided: boolean;

  @Column({
    name: 'voided_date',
    type: 'timestamptz',
    nullable: true,
  })
  voidedDate: Date;

  @ManyToOne((type) => Person)
  @JoinColumn({ name: 'voided_by', referencedColumnName: 'id' })
  voidedBy: Person;

  @Column({ nullable: true, name: 'void_reason' })
  voidReason: string;
}
