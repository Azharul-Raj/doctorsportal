import axios from "axios";

export const getRequest = (endpoint, query, info) => {
  const data = async () => {
    const res = await axios.get(`/${endpoint}?${query}=${info}`, {
      headers: {
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
    });
    return res.data;
  };
  return data;
};
