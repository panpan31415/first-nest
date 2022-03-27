import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateFoodItem1648379671401 implements MigrationInterface {
  name = 'CreateFoodItem1648379671401';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "fooditems" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "image_url" character varying NOT NULL, CONSTRAINT "PK_9ba13b4db09c2970111a444dabf" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "fooditems"`);
  }
}
