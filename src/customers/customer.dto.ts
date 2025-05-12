import {
  IsString,
  IsBoolean,
  MinLength,
  MaxLength,
  Length,
  IsOptional,
  Matches,
} from 'class-validator';

export class CustomerRequest {
  @IsString({ message: 'Customer ID must be a string' })
  @Matches(/^CUS\d{4}$/, {
    message: 'Customer ID must be in the format CUS-XXXX',
  })
  cus_id: string;

  @IsString({ message: 'First name must be a string' })
  @MinLength(3, { message: 'First name must be at least 3 characters long' })
  @MaxLength(50, { message: 'First name must be at most 50 characters long' })
  firstName: string;

  @IsString({ message: 'Last name must be a string' })
  @MinLength(3, { message: 'Last name must be at least 3 characters long' })
  @MaxLength(50, { message: 'Last name must be at most 50 characters long' })
  lastName: string;

  @IsBoolean({ message: 'isActive must be a boolean' })
  @IsOptional()
  isActive?: boolean;

  @IsString({ message: 'Phone number must be a string' })
  // @IsPhoneNumber()
  @Length(10, 10, { message: 'Phone number must be 10 digits long' })
  phoneNumber: string;

  @IsString({ message: 'Address must be a string' })
  address: string;
}

export class CustomerUpdateRequest {
  @IsString({ message: 'First name must be a string' })
  @MinLength(3, { message: 'First name must be at least 3 characters long' })
  @MaxLength(50, { message: 'First name must be at most 50 characters long' })
  @IsOptional()
  firstName: string;

  @IsString({ message: 'Last name must be a string' })
  @MinLength(3, { message: 'Last name must be at least 3 characters long' })
  @MaxLength(50, { message: 'Last name must be at most 50 characters long' })
  @IsOptional()
  lastName: string;

  @IsBoolean({ message: 'isActive must be a boolean' })
  @IsOptional()
  isActive: boolean;

  @IsString({ message: 'Phone number must be a string' })
  @IsOptional()
  phoneNumber: string;

  @IsString({ message: 'Address must be a string' })
  @IsOptional()
  address: string;
}
