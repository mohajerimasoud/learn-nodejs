import {
  createUserModel,
  deleteSingleUsersModel,
  getAllUsersModel,
  getSingleUsersModel,
} from "../models/users.model";
import { IUser } from "../Types/user.types";

const getAllUsersController = async () => {
  const users = await getAllUsersModel();
  return users;
};
const getSingleUserController = async (id: number) => {
  const users = await getSingleUsersModel(id);
  return users;
};

const deleteSingleUserController = async (id: number) => {
  const users = await deleteSingleUsersModel(id);
  return users;
};

const createUserController = async (user: IUser) => {
  const result = await createUserModel(user);
  return result;
};

export {
  getAllUsersController,
  createUserController,
  getSingleUserController,
  deleteSingleUserController,
};
