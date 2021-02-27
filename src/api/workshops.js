import request from "@/services/axios-client";

export const getWorkshops = () => {
  return request.get("/workshops");
};

export const getWorkshopsByQuery = params => {
  return request({
    url: "/workshops",
    method: "GET",
    params,
  });
};

export const getWorkshopById = id => {
  return request.get(`/workshops/${id}`);
};
