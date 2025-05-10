import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, UpdateWriteOpResult } from 'mongoose';
import { Feedback } from 'src/feedback/schema/feedback.schema';
import { feedbackRequest } from './feedback.dto';

@Injectable()
export class FeedbackService {
  constructor(
    //   inject cai model vao
    @InjectModel(Feedback.name) private feedbackModel: Model<Feedback>,
  ) {}

  async createFeedback(@Body() request: feedbackRequest): Promise<Feedback> {
    return await this.feedbackModel.create(request);
  }

  async findAllFeedbackProductId(productId: string): Promise<Feedback[]> {
    return await this.feedbackModel.find({ productId: productId });
  }

  async updateFeedback(
    productId: string,
    userId: string,
    request: {
      feedback: string;
    },
  ): Promise<UpdateWriteOpResult | null> {
    const feedback = await this.feedbackModel.findOne({
      productId: productId,
      userId: userId,
    });
    if (!feedback) {
      return null;
    }
    return await this.feedbackModel.updateOne(
      { productId: productId, userId: userId },
      request,
    );
  }
}
