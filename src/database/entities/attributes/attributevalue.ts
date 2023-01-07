import { HMISDataBaseEntity } from 'src/core/entities/data-base-entity';
import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Attribute } from './attribute';

export class AttributeValue extends HMISDataBaseEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'attribute_value_id',
  })
  id: number;

  @Column()
  value: string;

  @Column()
  description: string;

  @Column()
  category: string;

  @ManyToOne((type) => Attribute)
  @JoinColumn({ name: 'attribute_id', referencedColumnName: 'id' })
  attribute: Attribute;
}
