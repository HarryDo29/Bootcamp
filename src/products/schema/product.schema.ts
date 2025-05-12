import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  IsNumber,
  Max,
  IsString,
  MaxLength,
  Min,
  MinLength,
  IsBoolean,
} from 'class-validator';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @IsString()
  @Prop()
  productId: string;

  @IsString()
  @MinLength(3)
  @MaxLength(100)
  @Prop()
  name: string;

  @IsNumber()
  @Min(0.1)
  @Max(1000)
  @Prop()
  price: number;

  @IsString()
  @MinLength(3)
  @MaxLength(500)
  @Prop()
  description: string;

  @IsString()
  @MinLength(3)
  @MaxLength(100)
  @Prop()
  category: string;

  @IsBoolean()
  @Prop({ default: true })
  is_active: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
