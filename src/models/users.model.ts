import { IUser } from "../Types/user.types";
import prisma from "./db.model";

const getAllUsersModel = () => {
  return prisma.user.findMany({});
};

const getSingleUsersModel = async (id: number) => {
  try {
    const result = await prisma.user.findMany({
      where: {
        id: id,
      },
    });
    return result;
  } catch (error) {
    return {
      error,
    };
  }
};

const deleteSingleUsersModel = async (id: number) => {
  try {
    const result = await prisma.user.delete({
      where: {
        id: id,
      },
    });
    return result;
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
    return result;
  } catch (error) {
    return error;
  }
};

export {
  getAllUsersModel,
  createUserModel,
  getSingleUsersModel,
  deleteSingleUsersModel,
};
