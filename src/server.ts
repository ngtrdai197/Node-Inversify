import "reflect-metadata";
import * as express from "express";

import { inversifyExpressServer } from "./bootstrap";
import "./controllers"

const app = express();

(async () => {
    const server = await inversifyExpressServer(app);
    server.listen(3000, () => console.log(`Server started on port 3000 🚀 `))
})()

