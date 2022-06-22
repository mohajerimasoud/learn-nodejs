import prisma from "./db.model";

const getAllUsersModel = () => {
  return prisma.user.findMany({});
};

export { getAllUsersModel };
