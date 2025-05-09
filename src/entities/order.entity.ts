import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OrderEntity {
  @PrimaryGeneratedColumn()
  order_id: number;

  @Column()
  orderName: string;

  @Column()
  weight: string;

  @Column({ default: false })
  isArrive: boolean;

  @Column()
  cusPhoneNumber: string;

  @Column()
  address: string;

  @Column()
  orderDate: Date;
}
