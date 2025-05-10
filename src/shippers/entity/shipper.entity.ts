import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ShipperEntity {
  @PrimaryGeneratedColumn()
  shipperId: number;

  @Column()
  shipperName: string;

  @Column({ default: false })
  isWorking: boolean;

  @Column()
  shipperPhoneNumber: string;
}
