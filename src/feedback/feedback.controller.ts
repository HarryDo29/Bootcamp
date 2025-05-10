import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UpdateWriteOpResult } from 'mongoose';
import { Feedback } from 'src/feedback/chema/feedback.schema';
import {
  feedbackRequest,
  FeedbackService,
} from 'src/feedback/feedback.service';

@Controller('feedbacks')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post('create')
  createFeedback(@Body() request: feedbackRequest): Promise<Feedback> {
    return this.feedbackService.createFeedback(request);
  }

  @Get('findAllOfProduct/:productId')
  findAllFeedback(@Param('productId') productId: string): Promise<Feedback[]> {
    return this.feedbackService.findAllFeedbackProductId(productId);
  }

  @Put('update/:productId/:userId')
  updateFeedback(
    @Param('productId') productId: string,
    @Param('userId') userId: string,
    @Body()
    request: {
      feedback: string;
    },
  ): Promise<UpdateWriteOpResult | null> {
    return this.feedbackService.updateFeedback(productId, userId, request);
  }
}
