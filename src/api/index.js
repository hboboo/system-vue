import service from "../utils/service";

export const fetchUserData = () => {
  return service({
    url: "./mock/user.json",
    method: "get",
  });
};

export const fetchRoleData = () => {
  return service({
    url: "./mock/role.json",
    method: "get",
  });
};
