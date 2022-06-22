import { Prisma } from "@prisma/client";
import { IUser } from "../Types/user.types";
import prisma from "./db.model";

const getAllUsersModel = () => {
  return prisma.user.findMany({});
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

export { getAllUsersModel, createUserModel };
