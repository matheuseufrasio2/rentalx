/* eslint-disable prettier/prettier */
import { inject, injectable } from "tsyringe";

import { Category } from "@modules/cars/infra/typeorm/entities/Category";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";


@injectable()
class ListCategoriesUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) { }

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
