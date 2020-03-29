import { response } from "express";

export const handleError = (message: string, statusCode: number) => {
  return response.status(statusCode).json({ message, statusCode });
};
