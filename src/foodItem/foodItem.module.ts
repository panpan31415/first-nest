import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodItemController } from './foodItem.controller';
import { FoodItemEntity } from './fooditem.entity';
import { FoodItemService } from './foodItem.service';

@Module({
  imports: [TypeOrmModule.forFeature([FoodItemEntity])],
  controllers: [FoodItemController],
  providers: [FoodItemService],
})
export class FoodItemModule {}
