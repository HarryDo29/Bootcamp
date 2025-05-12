import {
  IsBoolean,
  IsNumber,
  IsPhoneNumber,
  IsString,
  Length,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ShipperEntity {
  @IsString()
  @Length(6, 6)
  @Matches('^SHP-[0-9]{6}$')
  @PrimaryGeneratedColumn()
  shipperId: string;

  @IsString()
  @MinLength(3)
  @MaxLength(50)
  @Column()
  shipperName: string;

  @IsBoolean()
  @Column({ default: false })
  isWorking: boolean;

  @IsString()
  @IsPhoneNumber()
  @Length(10, 10)
  @Column()
  shipperPhoneNumber: string;
}
