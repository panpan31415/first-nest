import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FoodItemEntity } from './fooditem.entity';

@Injectable()
export class FoodItemService {
  constructor(
    @InjectRepository(FoodItemEntity)
    private foodItemRepository: Repository<FoodItemEntity>,
  ) {}
  async getAll(): Promise<FoodItemEntity[]> {
    return await this.foodItemRepository.find();
  }
}
