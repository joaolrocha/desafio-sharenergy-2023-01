export default {
  secret:
    process.env.AUTH_SECRET || "zybjyibS1RmZEhGSY2R24zPVBRsbamoGjBmE4CWNS0c=",
  expiresIn: process.env.AUTH_EXPIRES_IN || "7d",
};
