import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsPhoneNumber,
  IsString,
  Length,
  Matches,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OrderEntity {
  @IsString()
  @Length(6, 6)
  @Matches('^ORD-[0-9]{6}$')
  @PrimaryGeneratedColumn()
  order_id: string;

  @IsString()
  @MinLength(3)
  @MaxLength(150)
  @Column()
  orderName: string;

  @IsNumber()
  @Min(0.1)
  @Max(20)
  @Column()
  weight: string;

  @IsBoolean()
  @Column({ default: false })
  isArrive: boolean;

  @IsString()
  @IsPhoneNumber()
  @Length(10, 10)
  @Column()
  cusPhoneNumber: string;

  @IsString()
  @Column()
  address: string;

  @IsDate()
  @Column()
  orderDate: Date;
}
