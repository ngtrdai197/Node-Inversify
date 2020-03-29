import { InversifyExpressServer } from "inversify-express-utils";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as helmet from "helmet";

import { createContainer } from "./di-container";
import { connect } from './common/database';

/** Start the server */
export const inversifyExpressServer = async (
  app: express.Application
): Promise<express.Application> => {
  const container = await createContainer();
  const server = new InversifyExpressServer(
    container,
    null,
    {
      rootPath: "/v1/api"
    },
    app
  );
  server.setConfig((app: express.Application) => {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(helmet());
  });
  connect();
  return server.build();
};
