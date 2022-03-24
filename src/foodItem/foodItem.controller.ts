import { Controller, Get } from '@nestjs/common';
import { FoodItemEntity } from './fooditem.entity';
import { FoodItemService } from './foodItem.service';

@Controller()
export class FoodItemController {
  constructor(private readonly foodItemService: FoodItemService) {}

  @Get('api/food-items')
  async getAll(): Promise<FoodItemEntity[]> {
    return await this.foodItemService.getAll();
  }
}
