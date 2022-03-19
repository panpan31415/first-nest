import { Injectable } from '@nestjs/common';

@Injectable()
export class FoodItemService {
  getAll() {
    return ['edimami', 'spicy edimami', 'tang salat'];
  }
}
