if (!process.env.IS_TS_NODE) {
  require('module-alias/register');
}

import { Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { FoodItemModule } from '@foodItem/foodItem.module';

@Module({
  imports: [FoodItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
