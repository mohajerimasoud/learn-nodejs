import { getAllUsersModel } from "../models/users.model";

const getAllUsersController = async () => {
  const users = await getAllUsersModel();
  return users;
};

export { getAllUsersController };
