import request from "@/services/axios-client";

export const getWorkshops = () => {
  return request.get("/workshops");
};

export const getWorkshopById = id => {
  return request.get(`/workshops/${id}`);
};

export const getWorkShopsByArea = area => {
  return request.get(`/workshops?area=${area}`);
};
