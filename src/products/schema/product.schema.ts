import { Field, Float, ID, ObjectType } from '@nestjs/graphql';
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
@ObjectType()
export class Product {
  @IsString()
  @Prop()
  @Field(() => ID)
  productId: string;

  @IsString()
  @MinLength(3)
  @MaxLength(100)
  @Prop()
  @Field()
  name: string;

  @IsNumber()
  @Min(0.1)
  @Max(1000)
  @Prop()
  @Field(() => Float)
  price: number;

  @IsString()
  @MinLength(3)
  @MaxLength(500)
  @Prop()
  @Field()
  description: string;

  @IsString()
  @MinLength(3)
  @MaxLength(100)
  @Prop()
  @Field()
  category: string;

  @IsBoolean()
  @Prop({ default: true })
  @Field(() => Boolean)
  is_active: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
