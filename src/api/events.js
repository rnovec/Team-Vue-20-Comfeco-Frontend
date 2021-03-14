import request from "@/services/axios-client";

export const getEventsByQuery = params => {
  return request({
    url: "/events",
    method: "GET",
    params,
  });
};

export const getEventById = id => {
  return request.get(`/events/${id}`);
};
