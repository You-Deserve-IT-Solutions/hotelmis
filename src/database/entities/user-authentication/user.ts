import { HMISBaseEntity } from 'src/core/entities/base-entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends HMISBaseEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'user_id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
    unique: true,
  })
  username: string;

  @Column({
    name: 'email',
    nullable: false,
    default: '',
  })
  email: string;

  @Column({
    nullable: false,
    default: '',
  })
  password: string;
}
