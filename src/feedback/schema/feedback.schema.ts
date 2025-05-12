import { IsString, MaxLength, MinLength } from 'class-validator';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type FeedbackDocument = HydratedDocument<Feedback>;

@Schema()
export class Feedback {
  @Prop()
  productId: string;

  @IsString()
  @Prop()
  userId: string;

  @IsString()
  @MinLength(3)
  @MaxLength(150)
  @Prop()
  feedback: string;
}

export const FeedbackSchema = SchemaFactory.createForClass(Feedback);
