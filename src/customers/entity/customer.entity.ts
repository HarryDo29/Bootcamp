import { ConfigService } from '@nestjs/config';
import {
  IsBoolean,
  IsPhoneNumber,
  IsString,
  Length,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class CustomerEntity {
  @IsString()
  @Length(6, 6)
  @Matches('^CUS-[0-9]{6}$')
  @PrimaryGeneratedColumn()
  cus_id: string;

  @IsString()
  @MinLength(3)
  @MaxLength(50)
  @Column()
  firstName: string;

  @IsString()
  @MinLength(3)
  @MaxLength(50)
  @Column()
  lastName: string;

  @IsBoolean()
  @Column({ default: true })
  isActive: boolean;

  @IsString()
  @IsPhoneNumber()
  @Length(10, 10)
  @Column()
  phoneNumber: string;

  @IsString()
  @Column()
  address: string;
}
