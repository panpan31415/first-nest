import { Module } from '@nestjs/common';
import { FoodItemController } from './foodItem.controller';
import { FoodItemService } from './foodItem.service';

@Module({
  imports: [],
  controllers: [FoodItemController],
  providers: [FoodItemService],
})
export class FoodItemModule {}
