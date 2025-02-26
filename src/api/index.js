import service from "../utils/service";

export const fetchUserData = () => {
  return service({
    url: "./mock/user.json",
    method: "get",
  });
};
