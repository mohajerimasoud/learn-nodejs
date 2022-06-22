import { IUser } from "../Types/user.types";
import prisma from "./db.model";

const getAllUsersModel = () => {
  return prisma.user.findMany({});
};

const getSingleUsersModel = (id: number) => {
  try {
    const result = prisma.user.findMany({
      where: {
        id: id,
      },
    });
    if (result) {
      return result;
    } else {
      return {
        error: "no users fount - model layer",
      };
    }
  } catch (error) {
    return {
      error: "error in model layer",
    };
  }
};

const deleteSingleUsersModel = (id: number) => {
  try {
    const result = prisma.user.delete({
      where: {
        id: id,
      },
    });
    if (result) {
      return result;
    } else {
      return {
        error: "no users fount - model layer",
      };
    }
  } catch (error) {
    return {
      error,
    };
  }
};

const createUserModel = async (user: IUser) => {
  try {
    const result = await prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
      },
    });

    return { result: result as IUser };
  } catch (error) {
    return { error: "Error in model layer" };
  }
};

export {
  getAllUsersModel,
  createUserModel,
  getSingleUsersModel,
  deleteSingleUsersModel,
};
