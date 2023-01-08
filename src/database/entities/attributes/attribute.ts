import { HMISMetadataBaseEntity } from 'src/core/entities/metadata-base-entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Attribute extends HMISMetadataBaseEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'attribute_id',
  })
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  shrotname: string;

  @Column()
  code: string;

  @Column()
  description: string;

  @Column({ default: false })
  mandatory: boolean;

  @Column({ nullable: false, name: 'value_type' })
  valueType: string;

  @Column({ name: 'person_attribute' })
  personAttribute: boolean;

  @Column({ name: 'client_attribute' })
  clientAttribute: boolean;

  @Column({ name: 'user_attribute' })
  userAttribute: boolean;

  @Column({ name: 'concept_attribute' })
  conceptAttribute: boolean;

  @Column({ name: 'location_attribute' })
  locationAttribute: boolean;

  @Column({ name: 'reservation_scheduling_attribute' })
  reservationSchedulingAttribute: boolean;

  @Column({ name: 'order_attribute' })
  orderAttribute: boolean;
}
