import axios from "axios";

const baseUrl = "http://localhost:3005/notes";

const getAll = () =>
  axios.get(baseUrl).then((response) =>
    response.data.concat({
      id: 10000,
      content: "This note is not saved to server",
      date: "2019-05-30T17:30:31.098Z",
      important: true,
    })
  );

const create = (newObject) =>
  axios.post(baseUrl, newObject).then((response) => response.data);

const update = (id, newObject) =>
  axios.put(`${baseUrl}/${id}`, newObject)
  .then((response) => response.data);

export default { getAll, create, update };
