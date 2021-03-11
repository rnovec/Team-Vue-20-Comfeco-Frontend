import request from "@/services/axios-client";

export const getGroups = () => {
  return request.get("/groups");
};

export const getGroupsByQuery = params => {
  return request({
    url: "/groups",
    method: "GET",
    params,
  });
};

export const getGroupById = id => {
  return request.get(`/groups/${id}`);
};
