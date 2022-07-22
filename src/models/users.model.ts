import { IUser } from "../Types/user.types";
import prisma from "./db.model";

const getAllUsersModel = () => {
  return prisma.user.findMany({});
};

const getSingleUsersModel = async (id: number) => {
  try {
    // const result = await prisma.user.findMany({
    //   where: {
    //     id: id,
    //   },
    // });
    return "result";
  } catch (error) {
    return {
      error,
    };
  }
};

const deleteSingleUsersModel = async (id: number) => {
  try {
    // const result = await prisma.user.delete({
    //   where: {
    //     id: id,
    //   },
    // });
    return "result";
  } catch (error) {
    return {
      error,
    };
  }
};

const createUserModel = async (user: IUser) => {
  console.log("=== uer data to create", user);
  try {
    const result = await prisma.user.create({
      data: {
        name: "Rick",
        email: "hello@prisma.com",
      },
    });
    console.log("=== uer create success , result", result);

    return result;
  } catch (error) {
    console.log(
      "=== error in creating => model layer => error message :",
      error
    );
    // return error;
    throw error;
  }
};

export {
  getAllUsersModel,
  createUserModel,
  getSingleUsersModel,
  deleteSingleUsersModel,
};
