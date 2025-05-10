import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type FeedbackDocument = HydratedDocument<Feedback>;

@Schema()
export class Feedback {
  @Prop()
  productId: string;

  @Prop()
  userId: string;

  @Prop()
  feedback: string;
}

export const FeedbackSchema = SchemaFactory.createForClass(Feedback);
