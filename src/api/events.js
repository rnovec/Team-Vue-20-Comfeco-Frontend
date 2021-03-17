import request from "@/services/axios-client";
<<<<<<< HEAD
export const getEvents = () => {
  return request.get("/events");
=======

export const getEventsByQuery = params => {
  return request({
    url: "/events",
    method: "GET",
    params,
  });
};

export const getEventById = id => {
  return request.get(`/events/${id}`);
>>>>>>> ec934e965f34835da778efc3aac76382d02f558f
};
