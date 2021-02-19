import { AxiosClient } from "./axios-client";

export const WorkShopService = {
  getWorkshops: function() {
    return AxiosClient.get("/workshops");
  },
  getWorkshopById: function(id) {
    return AxiosClient.get(`/workshops/${id}`);
  },
  getWorkShopsByArea: function(area) {
    return AxiosClient.get(`/workshops?area=${area}`);
  },
};
