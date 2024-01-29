import axios from "axios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/";

const getAll = (country) => {
  const request = axios.get(`${baseUrl}/all`);
  return request.then((response) => {
    const allData = response.data;
    const filteredData = allData.filter((data) => {
      return data.name.common.toLowerCase().includes(country.toLowerCase());
    });
    return filteredData;
  });
};

// const create = (newObject) => {
//   const request = axios.post(baseUrl, newObject);
//   return request.then((response) => response.data);
// };

// const remove = (id) => {
//   const request = axios.delete(`${baseUrl}/${id}`);
//   return request.then((response) => response.data);
// };

// const update = (id, newObject) => {
//   const request = axios.put(`${baseUrl}/${id}`, newObject);
//   return request.then((response) => response.data);
// };

export default { getAll };
