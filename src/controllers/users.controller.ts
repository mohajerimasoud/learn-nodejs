import { createUserModel, getAllUsersModel } from "../models/users.model";
import { IResponseCode } from "../Types/index.types";
import { IUser } from "../Types/user.types";

const getAllUsersController = async () => {
  const users = await getAllUsersModel();
  return users;
};

const createUserController = async (
  user: IUser
): Promise<IResponseCode<IUser>> => {
  if (user.email && user.name) {
    const result = await createUserModel(user);
    if (!result.error) {
      return {
        code: 200,
        message: "Success",
      };
    } else {
      return {
        code: 400,
        message: result.error,
      };
    }
  } else {
    return { code: 400, message: "Error in controller layer" };
  }
};

export { getAllUsersController, createUserController };
