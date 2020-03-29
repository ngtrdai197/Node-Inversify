import { Container } from "inversify";
import { makeLoggerMiddleware } from "inversify-logger-middleware";

import { REPOSITORY_TYPES, SERVICE_TYPES } from "./common/container-types";
import { ProductService } from "./services";
import { ProductRepository } from "./repositories";

export const createContainer = async (): Promise<Container> => {
  // load everything needed to the Container

  const container = new Container({ defaultScope: "Singleton" });
  if (process.env.NODE_ENV === "development") {
    const logger = makeLoggerMiddleware();
    container.applyMiddleware(logger);
  }
  /** bind services */
  container
    .bind<ProductService>(SERVICE_TYPES.ProductService)
    .to(ProductService);

  /** bind repositories */
  container
    .bind<ProductRepository>(REPOSITORY_TYPES.ProductRepository)
    .to(ProductRepository);

  return container;
};
