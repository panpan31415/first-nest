import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'fooditems' })
export class FoodItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  image_url: string;
}
