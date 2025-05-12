import { Column, Entity, BeforeInsert } from 'typeorm';

@Entity()
export class CustomerEntity {
  @Column({ type: 'varchar', length: 7, primary: true })
  cus_id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  phoneNumber: string;

  @Column()
  address: string;
}
