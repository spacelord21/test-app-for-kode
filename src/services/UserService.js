import axios from "axios";

const BASE_URL =
  "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=";

class UserService {
  getPersonFromDepartment = (value) => {
    return axios.get(`${BASE_URL}${value}`);
  };
}

export default new UserService();
