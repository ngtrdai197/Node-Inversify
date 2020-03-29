import * as mongoose from "mongoose";

export const connect = () => {
  try {
    mongoose
      .connect(`mongodb://localhost:27017/demo-inversify`, {
        useNewUrlParser: true,
        autoIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true
      })
      .then(() => console.log(`Successfully conntect to database ...`))
      .catch(error => console.log(`Error connecting to database ...`, error));
  } catch (error) {
    throw error;
  }
};
