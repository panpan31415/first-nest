import { Controller, Get } from '@nestjs/common';
import { FoodItemService } from './foodItem.service';

@Controller()
export class FoodItemController {
  constructor(private readonly foodItemService: FoodItemService) {}

  @Get('api/food-items')
  getAll() {
    return this.foodItemService.getAll();
  }
}
