import request from "@/services/axios-client";
export const getEvents = () => {
  return request.get("/events");
};
